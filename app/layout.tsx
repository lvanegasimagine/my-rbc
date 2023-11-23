import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { Footer, Navbar } from '@/components'
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'Clerk-Organizations',
  description: 'Clerk role Based Authentication Using Organizations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
        <html lang='en'>
          <body>
            <div className='main'>
              <div className='gradient' />
            </div>
            <main className='app'>
              <Navbar />
              {children}
              <Footer />
            </main>
          </body>
        </html>
    </ClerkProvider>
  )
}
