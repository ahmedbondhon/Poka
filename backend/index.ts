import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import diagnoseRoute from './routes/diagnose';
import snapRoute from './routes/snap';
import { rateLimiter } from './middleware/rateLimiter';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || [], // Restrict to extension ID(s)
  optionsSuccessStatus: 200
}));
app.use(express.json({ limit: '10mb' })); // Limit payload size

// Apply rate limiting to all API routes
app.use('/api', rateLimiter);

// Routes
app.use('/api/diagnose', diagnoseRoute);
app.use('/api/snap', snapRoute);

app.get('/api/health', (req, res) => res.send('OK'));

app.listen(port, () => {
  console.log(`Poka backend listening on port ${port}`);
});