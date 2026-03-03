import React, { useState } from 'react';
import { captureScreenshot } from '~core/capture';
import { getDiagnosis } from '~core/ai';
import { supabase } from '~core/supabase';
import { maskText } from '~core/masking';

function Popup() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ id: string; diagnosis: string } | null>(null);

  const handleSnap = async () => {
    setLoading(true);
    try {
      // Get current tab
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab.id) throw new Error('No active tab');

      // Capture screenshot
      const screenshot = await captureScreenshot();

      // Get logs from content script
      const logs = await new Promise<any>((resolve) => {
        chrome.tabs.sendMessage(tab.id!, { type: 'GET_LOGS' }, (response) => {
          resolve(response || { errors: [], network: [] });
        });
      });

      // Mask sensitive data
      const maskedErrors = logs.errors.map(maskText);
      const maskedNetwork = logs.network.map((n: any) => ({
        ...n,
        url: maskText(n.url || '')
      }));

      // Get diagnosis
      const diagnosis = await getDiagnosis({
        logs: maskedErrors,
        errors: maskedErrors,
        network: maskedNetwork,
        metadata: {
          url: tab.url || '',
          userAgent: navigator.userAgent // not perfect; ideally from content script
        }
      });

      // Store snap in Supabase
      const { data, error } = await supabase.from('snaps').insert({
        screenshot,
        logs: maskedErrors,
        network: maskedNetwork,
        diagnosis,
        created_at: new Date()
      }).select();

      if (error) throw error;

      setResult({ id: data[0].id, diagnosis });
    } catch (err: any) {
      alert('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-80 p-4 bg-white">
      <h1 className="text-xl font-bold mb-2">🐞 Poka</h1>
      <p className="text-sm text-gray-600 mb-4">One‑click bug snap</p>
      <button
        onClick={handleSnap}
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Capturing...' : 'Snap Bug'}
      </button>
      {result && (
        <div className="mt-4 p-2 bg-gray-100 rounded text-xs">
          <p className="font-bold">Snap saved! ID: {result.id}</p>
          <pre className="whitespace-pre-wrap">{result.diagnosis}</pre>
        </div>
      )}
    </div>
  );
}

export default Popup;