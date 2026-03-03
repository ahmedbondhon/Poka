import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

interface DiagnosisInput {
  logs: string[];
  errors: string[];
  network: any[];
  metadata: {
    url: string;
    userAgent?: string;
    viewport?: string;
  };
}

export async function generateDiagnosis(input: DiagnosisInput): Promise<string> {
  const prompt = `
You are a debugging assistant. Analyze the following technical data and provide a concise diagnosis and fix suggestion.

URL: ${input.metadata.url}
Console logs: ${input.logs.join('\n')}
Errors: ${input.errors.join('\n')}
Network requests: ${JSON.stringify(input.network, null, 2)}

Provide the output in this format:
**Issue**: Brief description
**Cause**: Technical reason (including file/line if possible)
**Fix**: Step‑by‑step solution
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}