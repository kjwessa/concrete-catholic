import './styles/globals.css'
import { Footer } from '@/components/Footer/index'
import { Header } from '@/components/Header/index'
import localFont from 'next/font/local'

// Import DM Sans
const DMSans = localFont({
  variable: '--font-dm-sans',
  display: 'swap',
  src: [{ path: './fonts/DMSans.ttf', weight: '100 400 900', style: 'normal' }],
})

// Import EB Garamond
const EBGaramond = localFont({
  variable: '--font-eb-garamond',
  display: 'swap',
  src: [{ path: './fonts/EBGaramond.ttf', weight: '400', style: 'normal' }],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${DMSans.variable} ${EBGaramond.variable}`}>
        <Header />
        <main className="flex min-h-svh flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
