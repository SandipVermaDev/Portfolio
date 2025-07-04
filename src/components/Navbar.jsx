import React, { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      for (const link of links) {
        const section = document.querySelector(link.href);
        if (
          section &&
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActiveLink(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu on link click (mobile)
  };

  return (
    <nav className="fixed top-4 right-6 z-50">
      {/* Desktop */}
      <ul className="hidden md:flex gap-6 text-sm md:text-base font-semibold tracking-wide">
        {links.map(link => {
          const isActive = activeLink === link.href.replace('#', '');
          return (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className={`transition duration-300 px-1 ${
                  isActive
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#c800ff] via-[#7a00ff] to-[#00ffe7] animate-glow-gradient bg-[length:200%_200%] drop-shadow-[0_0_6px_#c800ff] font-bold'
                    : 'text-[#00ffe7] hover:text-white hover:drop-shadow-[0_0_8px_#00ffe7] hover:animate-glow-gradient'
                }`}
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-neon text-2xl z-50 relative"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute right-0 top-12 bg-black bg-opacity-80 backdrop-blur-md px-6 py-4 rounded-lg space-y-4 md:hidden">
          {links.map(link => {
            const isActive = activeLink === link.href.replace('#', '');
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block transition duration-300 ${
                    isActive
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#c800ff] via-[#7a00ff] to-[#00ffe7] animate-glow-gradient bg-[length:200%_200%] drop-shadow-[0_0_6px_#c800ff] font-bold'
                      : 'text-[#00ffe7] hover:text-white hover:drop-shadow-[0_0_8px_#00ffe7] hover:animate-glow-gradient'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
