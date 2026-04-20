import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio | Alex Johnson',
  description: 'My personal portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 min-h-screen text-white">
        {children}
      </body>
    </html>
  );
}
