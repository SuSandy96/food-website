import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/recipes', label: 'Recipes' },
    { to: '/blog', label: 'Blog' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/videos', label: 'Videos' },
    { to: '/resources', label: 'Resources' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🍽️</span>
            </div>
            <span className="font-poppins font-bold text-xl text-dark hidden sm:inline">Food Blog</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-dark hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-dark"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-4 border-t pt-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-dark hover:text-primary transition-colors duration-200 font-medium block py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
