'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-btab-primary">
            Btab
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-btab-primary transition-colors">
              Products
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-btab-primary transition-colors">
              Pricing
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-btab-primary transition-colors">
              How It Works
            </Link>
            <Link href="/api-docs" className="text-gray-700 hover:text-btab-primary transition-colors">
              API Docs
            </Link>
            <Link href="https://vendors.btab.app" className="text-gray-700 hover:text-btab-primary transition-colors">
              Vendor Dashboard
            </Link>
            <Link href="#signup" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/products" className="block text-gray-700 hover:text-btab-primary transition-colors">
              Products
            </Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-btab-primary transition-colors">
              Pricing
            </Link>
            <Link href="/how-it-works" className="block text-gray-700 hover:text-btab-primary transition-colors">
              How It Works
            </Link>
            <Link href="/api-docs" className="block text-gray-700 hover:text-btab-primary transition-colors">
              API Docs
            </Link>
            <Link href="https://vendors.btab.app" className="block text-gray-700 hover:text-btab-primary transition-colors">
              Vendor Dashboard
            </Link>
            <Link href="#signup" className="btn-primary block text-center">
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
