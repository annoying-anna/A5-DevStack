import { useState } from 'react'

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f14]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Hamburger on mobile */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Center: Logo + Brand */}
          <div className="flex items-center gap-2">
            <img src="/logo-text.png" alt="Dev Stack" className="h-8 w-auto" />
            <span className="text-xl font-bold gradient-text hidden sm:block">Dev Stack</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right: Sign In / Sign Up */}
          <div className="flex items-center gap-3">
            <button className="text-gray-300 hover:text-white text-sm font-medium px-3 py-2 transition-colors">
              Sign In
            </button>
            <button className="btn-gradient text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#14141c] border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-gray-300 hover:text-white text-base font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t border-white/5">
              <button className="text-gray-300 hover:text-white text-sm font-medium flex-1 text-center py-2">
                Sign In
              </button>
              <button className="btn-gradient text-white text-sm font-semibold px-6 py-2 rounded-full hover:opacity-90 transition-opacity w-full text-center">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
