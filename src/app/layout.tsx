import Nav from './components/Nav';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-900 text-white">
        {/* Navigation */}
        <Nav />

        {/* Main Content */}
        <main className="container mx-auto p-6 flex-grow bg-gray-800 rounded-lg shadow-lg mt-4 mb-4">
          <h1 className="text-3xl font-bold text-center mb-6">Welcome to Our Blog</h1>
          <p className="text-center mb-4">
            Explore articles, profiles, and insights in a visually captivating way!
          </p>
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
