import rateLimit from 'express-rate-limit';

// General rate limiter – 100 requests per 15 minutes per IP
export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { error: 'Too many requests, please try again later.' },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false,
  keyGenerator: (req) => {
    // Use IP + user ID if authenticated (you can extend this)
    return req.ip || 'unknown';
  }
});

// Stricter limiter for diagnosis endpoint (since it's compute‑heavy)
export const strictLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20,
  message: { error: 'Diagnosis limit reached, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false
});