export default function HomePage() {
    return (
      <div>
        <h2 className="text-3xl font-bold">Welcome to the Advanced Next.js App</h2>
        <p className="mt-4">Explore our blog posts, user profiles, and more!</p>
  
        <div className="mt-6 space-y-4">
          <a href="/about" className="block text-blue-600 hover:underline">
            Learn more about the application
          </a>
          <a href="/blog" className="block text-blue-600 hover:underline">
            Read our blog posts
          </a>
          <a href="/users" className="block text-blue-600 hover:underline">
            Discover user profiles
          </a>
        </div>
      </div>
    );
  }
  