// Injects a floating button (optional) and sets up shadow DOM isolation.
// For simplicity, we'll create a button that opens the popup.
// This can be expanded to a more sophisticated UI.

import { maskText } from '~core/masking';

const container = document.createElement('div');
container.id = 'poka-root';
// Use shadow DOM to avoid style conflicts
const shadow = container.attachShadow({ mode: 'open' });

// Create a simple button
const button = document.createElement('button');
button.innerText = '🐞 Report Bug';
button.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999999;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  font-family: system-ui, sans-serif;
`;

button.addEventListener('click', () => {
  // Send message to background to open popup programmatically? Not possible.
  // Instead, we can open the popup via chrome.runtime.sendMessage to background,
  // and background can use chrome.action.openPopup()? Not directly.
  // For simplicity, we'll just open the side panel or a new tab.
  chrome.runtime.sendMessage({ type: 'OPEN_POPUP' });
});

shadow.appendChild(button);
document.body.appendChild(container);