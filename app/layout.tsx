import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigator from '@/components/Navigator'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Back Test Notes',
  description: 'This app for backtesting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-slate-200 text-sm'>
      <body className={inter.className}>
        <Navigator />
        <div className='p-4'>
          <div className='rounded-md bg-slate-800 text-white' >
          {children}
          </div>
        </div>
       
      </body>
    </html>
  )
}
