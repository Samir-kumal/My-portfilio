import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Samir Kumal",
  description:
    "I'm Samir Kumal, and I proudly call Pokhara, Nepal, my home. I'm deeply passionate about web development, and it's my mission to craft extraordinary websites and Mobile applications. My dedication goes beyond just creating websites; it's about crafting experiences that leave a lasting impression. I'm committed to delivering not just good but outstanding solutions to my clients.",
  alternates:{
    canonical: "www.samirkumal.com.np"
  },
  verification:{
    google:"EqvdV3brIc5jOpitnUa1QYoxxqdmv3W2Hjlb7rsOfKg"
  }
  
  
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
