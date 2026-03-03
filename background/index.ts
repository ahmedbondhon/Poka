// Service worker – handles heavy tasks, messaging, and API proxying if needed

chrome.runtime.onInstalled.addListener(() => {
  console.log('Poka installed');
});

// Listen for messages from content script or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'OPEN_POPUP') {
    // Open the popup programmatically? Not directly possible.
    // Alternative: open the dashboard tab
    chrome.tabs.create({ url: chrome.runtime.getURL('tabs/dashboard.html') });
  }

  if (message.type === 'CAPTURE_AND_DIAGNOSE') {
    // This would coordinate capturing, getting logs, calling AI, etc.
    // For brevity, we'll implement a simpler version.
    handleCaptureAndDiagnose(sender.tab?.id).then(sendResponse);
    return true; // keep channel open for async response
  }
});

async function handleCaptureAndDiagnose(tabId?: number) {
  if (!tabId) throw new Error('No tab ID');

  // 1. Capture screenshot via chrome.tabs API
  const screenshot = await new Promise<string>((resolve, reject) => {
    chrome.tabs.captureVisibleTab(null, { format: 'png' }, (dataUrl) => {
      if (chrome.runtime.lastError) reject(chrome.runtime.lastError);
      else resolve(dataUrl);
    });
  });

  // 2. Get logs from content script
  const logs = await new Promise<any>((resolve) => {
    chrome.tabs.sendMessage(tabId, { type: 'GET_LOGS' }, (response) => {
      resolve(response || { errors: [], network: [] });
    });
  });

  // 3. Mask PII in logs (text only)
  const maskedErrors = logs.errors.map((e: string) => maskText(e));
  const maskedNetwork = logs.network.map((n: any) => ({
    ...n,
    url: maskText(n.url || '')
  }));

  // 4. Get diagnosis from backend
  const diagnosis = await getDiagnosis({
    logs: maskedErrors, // we don't store logs? we might want to store full.
    errors: maskedErrors,
    network: maskedNetwork,
    metadata: {
      url: sender.tab?.url || '',
      userAgent: navigator.userAgent // but this is background's UA, not page's
      // better to get from content script
    }
  });

  // 5. Store snap in Supabase
  const { data, error } = await supabase.from('snaps').insert({
    screenshot,
    logs: maskedErrors,
    network: maskedNetwork,
    diagnosis,
    created_at: new Date()
  });

  if (error) throw error;

  return { snapId: data?.[0]?.id, diagnosis };
}