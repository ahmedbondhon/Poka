// This script runs in the context of the web page
// It intercepts console errors and network requests.

const consoleErrors: string[] = [];
const networkLogs: any[] = [];

// Save original methods
const originalError = console.error;
const originalWarn = console.warn;
const originalFetch = window.fetch;
const originalXHROpen = XMLHttpRequest.prototype.open;
const originalXHRSend = XMLHttpRequest.prototype.send;

// Override console.error
console.error = function(...args) {
  consoleErrors.push(args.map(String).join(' '));
  originalError.apply(console, args);
};

// Override console.warn (optional)
console.warn = function(...args) {
  // store if needed
  originalWarn.apply(console, args);
};

// Intercept fetch
window.fetch = async function(input, init) {
  const start = performance.now();
  try {
    const response = await originalFetch.call(this, input, init);
    const cloned = response.clone();
    const duration = performance.now() - start;
    networkLogs.push({
      type: 'fetch',
      url: typeof input === 'string' ? input : input.url,
      method: init?.method || 'GET',
      status: cloned.status,
      duration,
      timestamp: new Date().toISOString()
    });
    return response;
  } catch (error) {
    networkLogs.push({
      type: 'fetch',
      url: typeof input === 'string' ? input : input.url,
      method: init?.method || 'GET',
      error: String(error),
      timestamp: new Date().toISOString()
    });
    throw error;
  }
};

// Intercept XHR
XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
  this._poka = { method, url: url.toString() };
  return originalXHROpen.call(this, method, url, async, user, password);
};

XMLHttpRequest.prototype.send = function(body) {
  this.addEventListener('loadend', () => {
    networkLogs.push({
      type: 'xhr',
      url: this._poka?.url,
      method: this._poka?.method,
      status: this.status,
      timestamp: new Date().toISOString()
    });
  });
  return originalXHRSend.call(this, body);
};

// Listen for messages from background to retrieve logs
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GET_LOGS') {
    sendResponse({
      errors: consoleErrors,
      network: networkLogs
    });
  }
});