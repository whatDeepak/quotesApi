// index.ts
import express from 'express';
import messageResponse from '../interfaces/MessageResponse';
import quotesRouter from './api';

const router = express.Router();

router.get<{}, messageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/v1', quotesRouter);

export default router;
