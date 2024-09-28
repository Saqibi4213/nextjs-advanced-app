export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-8 flex items-center justify-center">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-extrabold mb-6 text-center animate-pulse">
          About This Application
        </h2>
        <p className="mt-4 text-lg leading-relaxed opacity-90">
          This application demonstrates the power of Next.js by integrating key features such as 
          <span className="font-semibold"> Static Site Generation (SSG)</span>, 
          <span className="font-semibold"> Server-Side Rendering (SSR)</span>, and API routing.
        </p>
        <p className="mt-4 text-lg leading-relaxed opacity-90">
          We fetch data dynamically from the 
          <a 
            href="https://jsonplaceholder.typicode.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-yellow-400 underline ml-1"
          >
            JSONPlaceholder API
          </a>, 
          which provides mock data for posts and users. You can explore blog posts and user profiles through a seamless interface.
        </p>
        <p className="mt-4 text-lg leading-relaxed opacity-90">
          JSONPlaceholder API is a free and easy-to-use service that provides test data for developers to 
          simulate various scenarios like fetching blog posts, user profiles, comments, and more. This app 
          showcases how to dynamically fetch and display this data in real-time.
        </p>
        <p className="mt-6 text-center text-lg">
          Stay tuned for more advanced features and content updates!
        </p>
      </div>
    </div>
  );
}
