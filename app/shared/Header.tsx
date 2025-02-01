"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PaintbrushIcon, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Attach the event listener only when the menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const handleOutsideClick = (event: MouseEvent) => {
      setMenuOpen(false);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 to-gray-700 backdrop-blur-sm border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <PaintbrushIcon className="h-8 w-8 text-white transition-all transform hover:scale-110" />
          <span className="text-2xl font-extrabold text-white tracking-wide">Interior Craft</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-white">
          {["Home", "Services", "Portfolio", "Testimonials", "About Us", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="text-base font-medium hover:text-yellow-400 transition-transform duration-200 hover:scale-105"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex space-x-4">
          <Button className="text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 py-2 px-6 rounded-full text-sm font-medium">
            Book Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden text-white hover:bg-white/10 rounded-lg p-2"
          onClick={(e) => {
            e.stopPropagation(); // Prevent closing when clicking the button
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-gray-900 border-t border-gray-700 transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
      >
        <nav className="flex flex-col items-center space-y-4 text-white py-4">
          {["Home", "Services", "Portfolio", "Testimonials", "About Us", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="text-base font-medium hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {item}
            </a>
          ))}
          <Button className="text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 py-2 px-6 rounded-full text-sm font-medium">
            Book Consultation
          </Button>
        </nav>
      </div>
    </header>
  );
}
