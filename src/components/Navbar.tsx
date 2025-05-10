import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white dark:bg-gray-900 shadow-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center space-x-2">
            <span className="bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-900 p-1 rounded">S</span>
            <span>SoftSell</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('how-it-works')} className="nav-link">How it Works</button>
            <button onClick={() => scrollToSection('why-choose-us')} className="nav-link">Why Us</button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </nav>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button 
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-4 px-4 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('hero')} className="mobile-nav-link">Home</button>
            <button onClick={() => scrollToSection('how-it-works')} className="mobile-nav-link">How it Works</button>
            <button onClick={() => scrollToSection('why-choose-us')} className="mobile-nav-link">Why Us</button>
            <button onClick={() => scrollToSection('testimonials')} className="mobile-nav-link">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;