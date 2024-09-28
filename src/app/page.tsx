import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center p-6">
      {/* Welcoming Image */}
      <div className="relative w-full max-w-3xl h-80 mb-10 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
        <Image
          src="https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Welcoming"
          fill
          style={{ objectFit: 'cover' }}
          className="transition-opacity duration-500 opacity-90 hover:opacity-100"
        />
      </div>

      <h2 className="text-5xl font-extrabold text-center mb-6 animate-pulse tracking-wide">
        Welcome to the Advanced Next.js App
      </h2>
      <p className="text-lg text-center max-w-2xl mb-8 opacity-90">
        Discover amazing blog posts, explore user profiles, and more! Dive into
        a world of dynamic content.
      </p>

      <div className="mt-6 space-y-4 max-w-md w-full">
        <a
          href="/about"
          className="block text-lg bg-gradient-to-r from-chocolate-700 to-chocolate-600 hover:from-chocolate-500 hover:to-chocolate-400 text-white py-3 px-6 rounded shadow-md transform hover:scale-105 transition-all duration-300"
        >
          Learn more about the application
        </a>
        <a
          href="/blog"
          className="block text-lg bg-gradient-to-r from-chocolate-700 to-chocolate-600 hover:from-chocolate-500 hover:to-chocolate-400 text-white py-3 px-6 rounded shadow-md transform hover:scale-105 transition-all duration-300"
        >
          Read our blog posts
        </a>
        <a
          href="/users"
          className="block text-lg bg-gradient-to-r from-chocolate-700 to-chocolate-600 hover:from-chocolate-500 hover:to-chocolate-400 text-white py-3 px-6 rounded shadow-md transform hover:scale-105 transition-all duration-300"
        >
          Discover user profiles
        </a>
      </div>
    </div>
  );
}
