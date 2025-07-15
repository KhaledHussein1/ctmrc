// app/layout.tsx
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CT Muslim Running Club',
  description: 'Connecticut Muslim Running Club: Where Faith and Fitness Meet.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
