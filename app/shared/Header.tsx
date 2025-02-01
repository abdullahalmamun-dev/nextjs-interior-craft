import { Button } from "@/components/ui/button";
import { PaintbrushIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 to-gray-700 backdrop-blur-sm border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <PaintbrushIcon className="h-8 w-8 text-white transition-all transform hover:scale-110" />
          <span className="text-2xl font-extrabold text-white tracking-wide">Interior Craft</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-white">
          <a href="#home" className="text-base font-medium hover:text-yellow-400 transition-colors duration-200 transform hover:scale-105">
            Home
          </a>
          <a href="#services" className="text-base font-medium hover:text-yellow-400 transition-colors duration-200 transform hover:scale-105">
            Services
          </a>
          <a href="#portfolio" className="text-base font-medium hover:text-yellow-400 transition-colors duration-200 transform hover:scale-105">
            Portfolio
          </a>
          <a href="#testimonials" className="text-base font-medium hover:text-yellow-400 transition-colors duration-200 transform hover:scale-105">
            Testimonials
          </a>
          <a href="#about-us" className="text-base font-medium hover:text-yellow-400 transition-colors duration-200 transform hover:scale-105">
            About Us
          </a>
          <a href="#contact" className="text-base font-medium hover:text-yellow-400 transition-colors duration-200 transform hover:scale-105">
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Button className="hidden md:inline-flex text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 py-2 px-6 rounded-full text-sm font-medium">
            Book Consultation
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden text-white hover:bg-white/10 rounded-lg p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
