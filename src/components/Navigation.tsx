import image_0ebda364cc3e96833d98acadbc5130cde859d675 from 'figma:asset/0ebda364cc3e96833d98acadbc5130cde859d675.png';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string, section?: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Blog', page: 'blog' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 bg-[rgba(255,255,255,0)]"
          >
            <ImageWithFallback 
              src={image_0ebda364cc3e96833d98acadbc5130cde859d675} 
              alt="DeFiTax Logo" 
              className="h-10 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`font-medium transition-colors ${
                  currentPage === link.page
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => window.location.href = 'https://app.defitax.us/'}
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => {
                    onNavigate(link.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`font-medium text-left transition-colors ${
                    currentPage === link.page
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  window.location.href = 'https://app.defitax.us/';
                  setMobileMenuOpen(false);
                }}
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-all text-center"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}