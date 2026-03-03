// Regex patterns for common PII
const patterns = [
  { regex: /\b[\w\.-]+@[\w\.-]+\.\w+\b/g, type: 'email' },
  { regex: /\b\d{16}\b/g, type: 'creditcard' }, // simple 16-digit
  { regex: /\b\d{3}-\d{2}-\d{4}\b/g, type: 'ssn' }
];

// Blur sensitive text in a string (for logs)
export function maskText(text: string): string {
  let masked = text;
  for (const { regex } of patterns) {
    masked = masked.replace(regex, (match) => '█'.repeat(match.length));
  }
  return masked;
}

// Blur rectangles in a screenshot (to be implemented with canvas)
export async function maskScreenshot(dataUrl: string): Promise<string> {
  // In a real implementation, you'd load image, detect text regions,
  // and apply blur. For now, we'll just return the original.
  // Consider using a library like 'tesseract.js' + canvas.
  // This is a placeholder.
  return dataUrl;
}