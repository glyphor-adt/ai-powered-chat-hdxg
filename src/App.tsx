import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Application',
  description: 'A clean and modern application layout.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.className
      )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <header className="border-b">
              <div className="container flex h-16 items-center justify-between py-4">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-lg">My App</p>
                </div>
                {/* Add navigation or other header elements here */}
              </div>
            </header>
            <main className="flex-1">
              <div className="container py-10">
                {children}
              </div>
            </main>
            <footer className="border-t">
              <div className="container flex h-20 items-center justify-center py-4">
                <p className="text-sm text-muted-foreground">
                  &copy; {new Date().getFullYear()} My Company. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}