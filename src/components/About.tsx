import { useEffect, useRef, useState } from 'react';

const facts = [
  { icon: '🎮', label: 'Roblox Studio', desc: 'Scripting games since 2021' },
  { icon: '🎨', label: 'UI Design', desc: 'Creating beautiful interfaces' },
  { icon: '🌙', label: 'Night Owl', desc: 'Best ideas come at midnight' },
  { icon: '⚡', label: 'Fast Delivery', desc: 'Clean code, fast turnaround' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={sectionRef}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-600/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <div
          className={`flex items-center gap-3 mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
        >
          <span className="w-8 h-px bg-purple-500" />
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">About Me</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div
            className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              The Dev
              <span className="block gradient-text">Behind the Snake 🐍</span>
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                What's up! I'm <span className="text-purple-300 font-semibold">Medusa</span> — a Roblox developer 
                with <span className="text-white font-medium">3+ years</span> of hands-on experience building 
                games and UI systems that actually feel good to use.
              </p>
              <p>
                I specialize in <span className="text-pink-300 font-medium">Lua scripting</span> and 
                <span className="text-blue-300 font-medium"> UI design</span> — making sure every game 
                I touch is both functional under the hood AND visually stunning on the surface.
              </p>
              <p>
                Whether it's a complex game system, a polished menu UI, or a full game from scratch — 
                I bring creativity and clean code together every single time.
              </p>
            </div>

            {/* Quick tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['Lua', 'Roblox Studio', 'UI/UX', 'Game Systems', 'Tween Service', 'RemoteEvents', 'Datastores'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-purple-300 glass-purple rounded-full border border-purple-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Fact Cards */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className="glass rounded-2xl p-5 border border-white/5 card-glow group cursor-default transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl mb-3 group-hover:animate-wiggle inline-block">{fact.icon}</div>
                <div className="font-semibold text-white text-sm mb-1">{fact.label}</div>
                <div className="text-slate-500 text-xs">{fact.desc}</div>
              </div>
            ))}

            {/* Center big stat card */}
            <div className="col-span-2 glass-purple rounded-2xl p-5 border border-purple-500/20 text-center card-glow group cursor-default">
              <div className="font-orbitron font-black text-5xl gradient-text">3+</div>
              <div className="text-slate-400 text-sm mt-1">Years in Roblox Studio</div>
              <div className="mt-3 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
