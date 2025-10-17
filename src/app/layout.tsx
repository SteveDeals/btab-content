import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Btab | Turn Products Into Profit, Without the Inventory',
  description: 'Launch your online store in minutes without inventory, warehousing, or logistics. Access 1000s of premium products, set your prices, and start selling today.',
  keywords: 'dropshipping alternative, white-label e-commerce, no inventory online store, e-commerce fulfillment platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
