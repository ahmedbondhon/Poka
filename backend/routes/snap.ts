import { Router } from 'express';

const router = Router();

router.post('/', async (req, res) => {
  try {
    // TODO: implement snap route logic
    res.json({ message: 'Snap route works' });
  } catch (error) {
    console.error('Snap error:', error);
    res.status(500).json({ error: 'Snap failed' });
  }
});

export default router;
