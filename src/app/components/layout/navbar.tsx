"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Scissors } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import kingsmenLogo from "../../../../public/images/kingsmenLogoMain.jpg"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navbarRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleResize = () => {
      if (navbarRef.current) {
        document.documentElement.style.setProperty('--navbar-height', `${navbarRef.current.offsetHeight}px`)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <header 
        ref={navbarRef}
        className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="container h-44 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-40">
            <div className="flex-shrink-0">
              <div className="relative w-56 h-44">
                <Image
                  src={kingsmenLogo}
                  alt="Kingsmen Barber Studio Logo"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'left center' }}
                  priority
                />
              </div>
            </div>
            <div className="flex items-center">
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-800 hover:text-gray-600 transition-colors">
                  Home
                </Link>
                <Link href="/services" className="text-gray-800 hover:text-gray-600 transition-colors">
                  Services
                </Link>
                <Link href="/about" className="text-gray-800 hover:text-gray-600 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-gray-800 hover:text-gray-600 transition-colors">
                  Contact
                </Link>
              </nav>
              <div className="hidden md:block ml-8">
                <Link
                  href="/book"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                >
                  <Scissors className="mr-2 h-4 w-4" />
                  Book Now
                </Link>
              </div>
              <div className="md:hidden ml-4">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-800 hover:text-gray-600 focus:outline-none p-2"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
                Home
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
                Services
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
                Contact
              </Link>
              <Link
                href="/book"
                className="block px-3 py-2 text-center text-white bg-black hover:bg-gray-800 rounded-md"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </header>
      <div className="h-40"></div>
    </>
  )
}