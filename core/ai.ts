// Client for backend diagnosis API
const API_BASE = process.env.PLASMO_PUBLIC_API_BASE_URL;

export interface DiagnosisInput {
  logs: string[];
  errors: string[];
  network: any[];
  metadata: {
    url: string;
    userAgent?: string;
    viewport?: string;
  };
}

export async function getDiagnosis(input: DiagnosisInput): Promise<string> {
  const response = await fetch(`${API_BASE}/diagnose`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input)
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Diagnosis failed');
  }

  const data = await response.json();
  return data.diagnosis;
}