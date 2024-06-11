import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const authorization = req.headers.get('authorization');
  
  if (authorization !== `Bearer ${process.env.CLIENT_KEY}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Trigger revalidation
    const revalidateUrl = new URL('*', req.url);
    await fetch(revalidateUrl.toString(), { method: 'POST' });
    return NextResponse.json({ message: 'Cache cleared' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to revalidate' }, { status: 500 });
  }
}