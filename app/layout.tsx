import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const interSans = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Grid landing page',
  description:
    'A responsive grid-based landing page built with Next.js, featuring a modern layout, engaging content sections, and optimized designs for desktop, tablet, and mobile devices.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${interSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
