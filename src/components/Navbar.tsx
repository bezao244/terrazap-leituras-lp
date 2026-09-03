import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoTerrazap from '../assets/images/logo-terrazap.png';
import logoSideBadge from '../assets/images/logo-side-badge.png';

interface NavbarProps {
  onCtaClick?: () => void;
}

export function Navbar({ onCtaClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-10 w-full" id="site-header">
      <nav
        id="main-navigation"
        className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <a
          id="nav-logo"
          href="#home"
          className="inline-flex items-center gap-2 sm:gap-3 select-none"
          aria-label="Terrazap Leituras"
        >
          <img
            src={logoTerrazap}
            alt="Terrazap Leituras"
            className="h-14 sm:h-16 w-auto object-contain"
            loading="eager"
            decoding="async"
          />
          <img
            src={logoSideBadge}
            alt="Selo Terrazap"
            className="h-9 sm:h-10 w-auto object-contain"
            loading="eager"
            decoding="async"
          />
        </a>

        {/* Desktop Menu items */}
        <div id="desktop-menu" className="hidden md:flex items-center space-x-10 text-sm">
          {/* <a
            id="nav-item-home"
            href="#home"
            className="text-[#000000] font-medium transition-colors hover:text-black"
          >
            Home
          </a> */}
          {/* <a
            id="nav-item-studio"
            href="#studio"
            className="text-[#6F6F6F] transition-colors hover:text-[#000000]"
          >
            Studio
          </a>
          <a
            id="nav-item-about"
            href="#about"
            className="text-[#6F6F6F] transition-colors hover:text-[#000000]"
          >
            About
          </a>
          <a
            id="nav-item-journal"
            href="#journal"
            className="text-[#6F6F6F] transition-colors hover:text-[#000000]"
          >
            Journal
          </a>
          <a
            id="nav-item-reach-us"
            href="#reach-us"
            className="text-[#6F6F6F] transition-colors hover:text-[#000000]"
          >
            Reach Us
          </a> */}
        </div>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <button
            id="nav-cta-btn"
            type="button"
            onClick={onCtaClick}
            className="rounded-full px-6 py-2.5 text-sm font-normal bg-[#000000] text-white transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            Explorar leituras
          </button>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#000000] hover:text-[#6F6F6F] transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="md:hidden px-8 py-4 bg-white/95 backdrop-blur-md border-b border-black/5 flex flex-col space-y-4 text-sm"
        >
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#000000] font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="#studio"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#6F6F6F] transition-colors hover:text-[#000000]"
          >
            Studio
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#6F6F6F] transition-colors hover:text-[#000000]"
          >
            About
          </a>
          <a
            href="#journal"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#6F6F6F] transition-colors hover:text-[#000000]"
          >
            Journal
          </a>
          <a
            href="#reach-us"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#6F6F6F] transition-colors hover:text-[#000000]"
          >
            Reach Us
          </a>
        </div>
      )}
    </header>
  );
}
