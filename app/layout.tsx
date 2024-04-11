import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { cm } from './lib/utils';
import Gradient from './components/gradient';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Personal portfolio',
  description: 'Personal portfolio of Aljaž Krajnc',
};

export default function RootLayout({
  children,
  skills,
  projects,
}: Readonly<{
  children: React.ReactNode;
  skills: React.ReactNode;
  projects: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cm(inter.className, 'overflow-y-hidden')}>
        <main className="flex min-h-screen  h-full relative z-50 backdrop-blur-lg flex-col lg:flex-row justify-between p-8">
          {children}
          {projects}
          {/* <Gradient /> */}
        </main>
      </body>
    </html>
  );
}
