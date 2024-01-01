// api.ts

import express from 'express';
import { quotes } from './quotes';

const router = express.Router();

type QuoteResponse = {
  quote?: string; // Make quote property optional
  error?: string; // Add optional error property
};

router.get<{ date: string }, QuoteResponse>('/:date', (req, res) => {
  const { date } = req.params;

  // Parse the date to get the day
  const day = parseInt(date, 10);

  // Check if the day is valid
  if (day >= 1 && day <= quotes.length) {
    const quote = quotes[day - 1];
    res.json({ quote });
  } else {
    res.status(404).json({ error: 'Quote not found' });
  }
});

export default router;
