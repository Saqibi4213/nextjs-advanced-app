import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold mb-2">© 2024 Advanced Next.js | Mehria | Blog</p>
          <p className="text-sm text-gray-400">All rights reserved.</p>
        </div>

        <div className="flex flex-col items-start md:items-center">
          <p className="font-bold text-lg mb-2">Contact Us</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a 
                href="mailto:contact@jawaher.com" 
                className="flex items-center text-gray-400 hover:text-yellow-500 transition-all duration-300 ease-in-out"
              >
                <FaEnvelope className="mr-2" /> contact@jawaher.com
              </a>
            </li>
            <li>
              <a 
                href="tel:+123456789" 
                className="flex items-center text-gray-400 hover:text-yellow-500 transition-all duration-300 ease-in-out"
              >
                <FaPhone className="mr-2" /> +1 (234) 567-890
              </a>
            </li>
            <li className="text-gray-400 hover:text-yellow-500 transition-all duration-300 ease-in-out">
              123 Blog St, Blog City, BC 12345
            </li>
          </ul>
        </div>

        <div className="flex space-x-6 text-center">
          <a
            href="https://twitter.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-all duration-300 ease-in-out"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://github.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-all duration-300 ease-in-out"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com/company/example"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-all duration-300 ease-in-out"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
