import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Container from './Container';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5 text-white'
      }`}
    >
      <Container>
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI Prospector
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('pain-points')}
              className="font-bold px-3 py-1 rounded-md text-indigo-700 hover:text-purple-600 transition-colors"
            >
              Problemas
            </button>
            <button 
              onClick={() => scrollToSection('solution')}
              className="font-bold px-3 py-1 rounded-md text-indigo-700 hover:text-purple-600 transition-colors"
            >
              Solución
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="font-bold px-3 py-1 rounded-md text-indigo-700 hover:text-purple-600 transition-colors"
            >
              Beneficios
            </button>
            <Button 
              onClick={() => scrollToSection('waitlist-form')}
              className={`font-bold px-6 py-3 rounded-full transition-colors shadow ${
                isScrolled
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-white text-indigo-700 border-2 border-indigo-100 hover:bg-indigo-50'
              }`}
            >
              Únete a la lista
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </nav>
      </Container>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-800 px-4 py-5 shadow-lg">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('pain-points')}
              className="py-2 px-4 text-left hover:bg-gray-100 rounded-lg"
            >
              Problemas
            </button>
            <button 
              onClick={() => scrollToSection('solution')}
              className="py-2 px-4 text-left hover:bg-gray-100 rounded-lg"
            >
              Solución
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="py-2 px-4 text-left hover:bg-gray-100 rounded-lg"
            >
              Beneficios
            </button>
            <Button 
              onClick={() => scrollToSection('waitlist-form')}
              className="w-full justify-center"
            >
              Únete a la lista
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;