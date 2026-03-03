import React, { useEffect, useState } from 'react';
import { supabase } from '~core/supabase';

export default function Dashboard() {
  const [snaps, setSnaps] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSnaps() {
      const { data, error } = await supabase
        .from('snaps')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) console.error(error);
      else setSnaps(data || []);
      setLoading(false);
    }
    loadSnaps();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Poka Dashboard</h1>
      <div className="grid gap-4">
        {snaps.map((snap) => (
          <div key={snap.id} className="border rounded p-4 shadow">
            <p className="text-sm text-gray-500">
              {new Date(snap.created_at).toLocaleString()}
            </p>
            <img src={snap.screenshot} alt="Screenshot" className="mt-2 max-h-40" />
            <pre className="mt-2 text-xs bg-gray-100 p-2 rounded">
              {snap.diagnosis}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}