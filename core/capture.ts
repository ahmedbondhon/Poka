import html2canvas from 'html2canvas';

// Capture screenshot of current tab (via chrome.tabs API)
export async function captureScreenshot(): Promise<string> {
  return new Promise((resolve, reject) => {
    chrome.tabs.captureVisibleTab({ format: 'png' }, (dataUrl) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(dataUrl);
      }
    });
  });
}

// Screen recording using getDisplayMedia (requires user gesture)
export async function startRecording(): Promise<MediaStream> {
  try {
    return await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: false
    });
  } catch (err) {
    throw new Error('Screen capture denied or failed');
  }
}