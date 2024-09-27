import Nav from './components/Nav';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
        {/* Navigation */}
        <Nav />

        {/* Main Content */}
        <main className="container mx-auto p-6 flex-grow">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
