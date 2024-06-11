import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (req.headers.authorization !== `Bearer ${process.env.CLIENT_KEY}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Revalidate the entire site
    await res.revalidate('/');
    return res.status(200).json({ message: 'Cache cleared' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to revalidate' });
  }
}