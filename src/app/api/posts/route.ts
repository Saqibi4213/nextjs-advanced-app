import { NextResponse } from 'next/server';

// Fetch posts from JSONPlaceholder
export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return NextResponse.json(posts);
}
