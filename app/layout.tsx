import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
// import ScriptTag from 'react-script-tag'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'BooleanCube\'s Portfolio',
  description: 'Learn more about BooleanCube on their portfolio website with many cool projects and blogs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-container">
      {/*<head>*/}
      {/*  <link rel={"icon"} type={"image/x-icon"} href={"https://github.com/BooleanCube/portfolio/raw/main/public/favicon.ico"} />*/}
      {/*  <title>BooleanCube</title>*/}
      {/*</head>*/}
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-1000 text-gray-0 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          <Banner />
        </div>
      </body>
    </html>
  )
}
 