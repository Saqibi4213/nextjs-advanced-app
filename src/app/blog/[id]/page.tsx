"use client"; // Mark this component as a Client Component

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Function to fetch a single blog post by ID
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
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-4xl font-extrabold mb-6 text-yellow-400">{post.title}</h2>
        <p className="text-lg text-gray-300 mb-6">{post.body}</p>

        {/* "Go Back" Button */}
        <button
          onClick={() => router.back()}
          className="inline-block bg-chocolate-700 hover:bg-chocolate-500 text-white py-2 px-6 rounded transition-transform transform hover:scale-105"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
