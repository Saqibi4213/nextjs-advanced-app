"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

async function fetchBlogPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<{ title: string; body: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadPost() {
      try {
        const postData = await fetchBlogPost(params.id);
        setPost(postData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    }
    loadPost();
  }, [params.id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center text-white">Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl bg-gray-800 p-10 rounded-lg shadow-2xl transform transition-transform hover:scale-105 w-full">
        <h2 className="text-4xl font-bold mb-6 text-yellow-500 animate-pulse">{post.title}</h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">{post.body}</p>

        {/* "Go Back" Button */}
        <button
          onClick={() => router.back()}
          className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-110 ease-in-out duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
