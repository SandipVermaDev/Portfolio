import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

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
    handleScroll(); // Initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 right-6 z-50">
      <ul className="flex gap-6 text-sm md:text-base font-semibold tracking-wide">
        {links.map(link => {
          const isActive = activeLink === link.href.replace('#', '');
          return (
            <li key={link.name}>
              <a
                href={link.href}
                className={`transition duration-300 px-1
                  ${
                    isActive
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#c800ff] via-[#7a00ff] to-[#00ffe7] animate-glowGradient bg-[length:200%_200%] drop-shadow-[0_0_6px_#c800ff] font-bold'
                      : 'text-[#00ffe7] hover:text-white hover:drop-shadow-[0_0_8px_#00ffe7]'
                  }
                `}
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
