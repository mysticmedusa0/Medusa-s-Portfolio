import { useState, useEffect } from 'react';

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map(l => document.getElementById(l.toLowerCase()));
      const scrollPos = window.scrollY + 120;

      sections.forEach((sec, i) => {
        if (sec && scrollPos >= sec.offsetTop) {
          setActive(links[i]);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#080b14]/90 backdrop-blur-xl border-b border-purple-900/30 shadow-lg shadow-purple-950/20'
          : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="font-orbitron font-black text-xl tracking-widest gradient-text hover:scale-105 transition-transform duration-200 cursor-pointer"
        >
          MEDUSA
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                active === link
                  ? 'text-purple-300'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {active === link && (
                <span className="absolute inset-0 bg-purple-500/10 rounded-lg border border-purple-500/20" />
              )}
              {link}
              {active === link && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full" />
              )}
            </button>
          ))}

          <a
            href="https://www.roblox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-6 h-0.5 bg-purple-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-purple-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-purple-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-400 overflow-hidden ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 bg-[#0d1117]/95 backdrop-blur-xl border-b border-purple-900/20 flex flex-col gap-2">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === link
                  ? 'text-purple-300 bg-purple-500/10 border border-purple-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
