import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-lg mb-4 md:mb-0">© 2024 Advanced Next.js | Mehria | Blog</p>
        <div className="flex flex-col items-start">
          <p className="font-bold text-lg">Contact Us</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a 
                href="mailto:contact@jawaher.com" 
                className="flex items-center hover:text-chocolate-700 transition duration-300"
              >
                <FaEnvelope className="mr-2" /> contact@jawaher.com
              </a>
            </li>
            <li className="flex items-center">
              <a 
                href="tel:+123456789" 
                className="flex items-center hover:text-chocolate-700 transition duration-300"
              >
                <FaPhone className="mr-2" /> +1 (234) 567-890
              </a>
            </li>
            <li className="flex items-center">
              <span className="hover:text-chocolate-700 transition duration-300">123 Blog St, Blog City, BC 12345</span>
            </li>
          </ul>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a 
            href="https://twitter.com/example" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-chocolate-700 transition duration-300"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a 
            href="https://github.com/example" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-chocolate-700 transition duration-300"
          >
            <FaGithub className="text-xl" />
          </a>
          <a 
            href="https://linkedin.com/company/example" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-chocolate-700 transition duration-300"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
