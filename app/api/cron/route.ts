import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const authorization = req.headers.get('authorization');

  if (authorization !== `Bearer ${process.env.CLIENT_KEY}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const revalidateUrl = new URL('/api/revalidate', req.url);
    await fetch(revalidateUrl.toString(), { method: 'POST' });
    return NextResponse.json({ message: 'Cache cleared' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to revalidate' }, { status: 500 });
  }
}
