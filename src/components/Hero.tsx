import { useEffect, useState, useRef } from 'react';

const roles = ['Roblox Scripter', 'UI Designer', 'Game Developer', 'Lua Developer'];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 90;

    intervalRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hex-bg"
    >
      {/* Large background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-sm font-medium text-purple-300 mb-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for commissions
          <span className="ml-1">🎮</span>
        </div>

        {/* Main heading */}
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <h1 className="font-orbitron font-black text-6xl md:text-8xl tracking-tight mb-4 leading-none">
            <span className="block text-white">HEY, I'M</span>
            <span className="block gradient-text animate-glow-text mt-2">MEDUSA</span>
          </h1>
        </div>

        {/* Typewriter */}
        <div
          className={`flex items-center justify-center gap-2 mt-6 mb-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.35s' }}
        >
          <span className="text-slate-400 text-lg md:text-2xl font-light">Your next</span>
          <span className="text-lg md:text-2xl font-semibold text-purple-300 min-w-[220px] text-left">
            {displayText}
            <span className="cursor-blink text-pink-400 ml-0.5">|</span>
          </span>
        </div>

        {/* Description */}
        <p
          className={`text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.45s' }}
        >
          3+ years of crafting immersive Roblox experiences — from slick UI systems 
          to complex game scripts. Let's build something legendary.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.55s' }}
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 animate-pulse-glow"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 glass border border-purple-500/30 rounded-xl font-semibold text-purple-300 hover:bg-purple-500/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </button>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.65s' }}
        >
          {[
            { value: '3+', label: 'Years Exp.' },
            { value: '20+', label: 'Projects' },
            { value: '100%', label: 'Passion' },
          ].map((stat) => (
            <div key={stat.label} className="glass-purple rounded-xl p-4 text-center hover:scale-105 transition-transform duration-200">
              <div className="font-orbitron font-bold text-2xl gradient-text">{stat.value}</div>
              <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-bounce-soft">
          <div className="w-6 h-10 rounded-full border-2 border-purple-500/40 flex items-start justify-center pt-2">
            <div className="w-1 h-2.5 bg-purple-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
