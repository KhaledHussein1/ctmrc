'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Community', href: '/community' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  // Handle overlay mount/unmount and animation triggers
  useEffect(() => {
    if (isOpen) {
      setShowOverlay(true);
      // Animate in on next tick
      setTimeout(() => setAnimateIn(true), 10);
    } else {
      // Animate out
      setAnimateIn(false);
      // Remove overlay after animation duration (350ms)
      const timeout = setTimeout(() => setShowOverlay(false), 350);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 shadow-md transition-colors duration-300 ${
        isOpen ? 'bg-green-100 text-green-900' : 'bg-white text-black'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Left: Brand */}
        <Link href="/" className="text-xl font-bold whitespace-nowrap z-50">
          @CTMRC
        </Link>

        {/* Hamburger / X button */}
        <button
          className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {/* Hamburger bars */}
          <span
            className={`block h-0.5 w-full bg-current rounded-sm transition-transform duration-300 origin-center
            ${isOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'}`}
          />
          <span
            className={`block h-0.5 w-full bg-current rounded-sm transition-opacity duration-300
            ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`block h-0.5 w-full bg-current rounded-sm transition-transform duration-300 origin-center
            ${isOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'}`}
          />
        </button>

        {/* Center: Nav Menu (desktop only) */}
        <ul className="hidden md:flex gap-6 items-center text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`hover:text-green-600 transition ${
                  pathname === item.href ? 'font-semibold underline' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Social Icons (desktop only) */}
        <div className="hidden md:flex gap-6 text-xl text-green-700">
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
            <FaInstagram className="hover:text-green-900 transition" />
          </Link>
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
            <FaFacebook className="hover:text-green-900 transition" />
          </Link>
          <Link href="https://tiktok.com" target="_blank" aria-label="TikTok" rel="noopener noreferrer">
            <FaTiktok className="hover:text-green-900 transition" />
          </Link>
        </div>

        {/* Mobile Overlay Menu */}
        {(isOpen || showOverlay) && (
          <div
            className={`fixed inset-x-0 bottom-0 top-[64px] bg-green-100 bg-opacity-95 flex flex-col justify-center items-center space-y-8 text-green-900 z-40
              transition-transform duration-350
              ${animateIn ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-full pointer-events-auto'}
            `}
            onClick={() => setIsOpen(false)}
          >
            {/* Prevent click propagation so clicking menu doesn't close */}
            <nav
              className="flex flex-col items-center space-y-8 text-2xl font-semibold"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-green-700 transition ${
                    pathname === item.href ? 'underline' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Social Icons fixed at bottom */}
            <div className="absolute bottom-8 flex gap-8 text-3xl text-green-700">
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                <FaInstagram />
              </Link>
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                <FaFacebook />
              </Link>
              <Link href="https://tiktok.com" target="_blank" aria-label="TikTok" rel="noopener noreferrer">
                <FaTiktok />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
