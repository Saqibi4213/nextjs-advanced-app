import Image from 'next/image';

export default function Nav() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <h1 className="text-4xl font-extrabold font-serif text-chocolate-800 transition-transform transform hover:scale-105">
            JAWAHER
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <a
              href="/"
              className="text-lg hover:text-chocolate-600 transition duration-300 transform hover:scale-110"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-lg hover:text-chocolate-600 transition duration-300 transform hover:scale-110"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="text-lg hover:text-chocolate-600 transition duration-300 transform hover:scale-110"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/users"
              className="text-lg hover:text-chocolate-600 transition duration-300 transform hover:scale-110"
            >
              Users
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
