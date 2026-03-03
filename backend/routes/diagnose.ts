import { Router } from 'express';
import { z } from 'zod';
import { validate } from '../middleware/validate';
import { strictLimiter } from '../middleware/rateLimiter';
import { generateDiagnosis } from '../lib/gemini';

const router = Router();

// Input validation schema
const diagnoseSchema = z.object({
  body: z.object({
    logs: z.array(z.string()).max(1000), // Limit array size
    errors: z.array(z.string()).max(100),
    network: z.array(z.any()).max(500),
    metadata: z.object({
      url: z.string().url().max(2000),
      userAgent: z.string().max(500).optional(),
      viewport: z.string().max(100).optional()
    }).strict() // Reject unexpected fields
  }).strict()
});

router.post(
  '/',
  strictLimiter, // Stricter rate limit
  validate(diagnoseSchema),
  async (req, res) => {
    try {
      const { logs, errors, network, metadata } = req.body;
      
      // Call Gemini (service function)
      const diagnosis = await generateDiagnosis({
        logs,
        errors,
        network,
        metadata
      });

      res.json({ diagnosis });
    } catch (error) {
      console.error('Diagnosis error:', error);
      res.status(500).json({ error: 'Failed to generate diagnosis' });
    }
  }
);

export default router;