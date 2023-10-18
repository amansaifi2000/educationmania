import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Education Mania || Online Learning Platform',
  description: 'Education mania is an online learning platform where you will get to learn about new technologies by enrolling in any course you would like to choose.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
