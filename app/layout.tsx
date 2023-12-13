import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextGen Stream Platform',
  description: 'NextGen Stream Platform – A cutting-edge, feature-rich streaming application, crafted with the latest web technologies for an unparalleled streaming experience. Powered by Create Next App.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
