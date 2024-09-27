export const revalidate = 60;

// Define the interface for a blog post
interface BlogPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Fetch blog posts and specify the return type
async function fetchBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

// Use the BlogPost type in the component
export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-4xl font-extrabold text-center mb-8 animate-pulse">
        Blog Posts
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, 10).map((post: BlogPost) => (
          <li key={post.id} className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <a href={`/blog/${post.id}`} className="block">
              {/* Placeholder Image */}
              <img
                src={`https://picsum.photos/400/200?random=${post.id}`}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 text-yellow-400">{post.title}</h3>
              <p className="text-gray-400">
                {post.body.slice(0, 100)}...{' '}
                <span className="text-blue-400 hover:underline">Read more</span>
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
