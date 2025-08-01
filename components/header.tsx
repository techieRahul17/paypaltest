"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Dumbbell } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold text-gray-900">FitPro Gym</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("membership")}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Membership
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("membership")} className="bg-red-600 hover:bg-red-700">
              Join Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-gray-700 hover:text-red-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-red-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("membership")}
                className="text-left text-gray-700 hover:text-red-600 transition-colors"
              >
                Membership
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-left text-gray-700 hover:text-red-600 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-red-600 transition-colors"
              >
                Contact
              </button>
              <Button onClick={() => scrollToSection("membership")} className="bg-red-600 hover:bg-red-700 w-fit">
                Join Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
