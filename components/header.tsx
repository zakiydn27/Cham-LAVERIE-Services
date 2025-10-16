"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-scroll"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Sinkronkan tema dengan localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    setIsDark(!isDark)
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border transition-colors">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">C</span>
          </div>
          <span className="text-xl font-bold text-foreground">Cham'LAVERIE Services</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="services" smooth duration={600} offset={-70} className="cursor-pointer text-foreground hover:text-primary transition">
            Services
          </Link>
          <Link to="opening-hour" smooth duration={600} offset={-70} className="cursor-pointer text-foreground hover:text-primary transition">
            Opening Hours
          </Link>
          <Link to="testimonials" smooth duration={600} offset={-70} className="cursor-pointer text-foreground hover:text-primary transition">
            Reviews
          </Link>
          <Link to="contact" smooth duration={600} offset={-70} className="cursor-pointer text-foreground hover:text-primary transition">
            Contact
          </Link>

          {/* 🔆 Tombol Toggle Theme */}
          <Button
            onClick={toggleTheme}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 transition"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link to="services" smooth duration={600} offset={-70} className="cursor-pointer text-foreground hover:text-primary transition" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link to="pricing" smooth duration={600} offset={-70} className="cursor-pointer text-foreground hover:text-primary transition" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              <Link to="testimonials" smooth duration={600} offset={-70} className="cursor-pointer text-foreground hover:text-primary transition" onClick={() => setIsOpen(false)}>
                Reviews
              </Link>
              <Link to="contact" smooth duration={600} offset={-70} className="cursor-pointer text-foreground hover:text-primary transition" onClick={() => setIsOpen(false)}>
                Contact
              </Link>

              {/* 🔆 Tombol Toggle Theme di Mobile */}
              <Button
                onClick={() => {
                  toggleTheme()
                  setIsOpen(false)
                }}
                className="w-full flex items-center gap-2 bg-primary hover:bg-primary/90"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                {isDark ? "Light Mode" : "Dark Mode"}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
