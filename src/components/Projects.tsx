import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: 'Advanced Settings System',
    desc: 'A fully functional settings menu designed for maximum player control. Fully functional, works on all devices, and is perfectly responsive with a flawless DataStore system.',
    embedUrl: 'https://streamable.com/e/e90xn9?loop=1',
    icon: '⚙️',
    accent: '#a855f7',
    border: 'border-purple-500/20',
    tags: ['Cross-Platform', 'DataStore', 'Responsive'],
  },
  {
    title: 'Cash & Rebirth System',
    desc: 'A fast, reliable, and efficient economy framework. Engineered with responsive UI and a robust DataStore architecture to handle rapid currency changes and scaling.',
    embedUrl: 'https://streamable.com/e/z9mn8s?loop=1',
    icon: '💰',
    accent: '#10b981',
    border: 'border-emerald-500/20',
    tags: ['Economy', 'Efficient', 'Reliable'],
  },
  {
    title: 'Daily Rewards System',
    desc: 'An automated rewards system that is fast, responsive, and compatible with all devices. Features a perfect DataStore implementation to track player streaks seamlessly.',
    embedUrl: 'https://streamable.com/e/lr5koj?loop=1',
    icon: '🎁',
    accent: '#3b82f6',
    border: 'border-blue-500/20',
    tags: ['Retention', 'DataStore', 'Multi-Device'],
  },
  {
    title: 'Universal Main UI',
    desc: 'A high-performance, perfectly responsive main interface. Works on all devices with flawless layout scaling and pixel-perfect design for a premium user experience.',
    embedUrl: 'https://streamable.com/e/ak32ko?loop=1',
    icon: '🖥️',
    accent: '#ec4899',
    border: 'border-pink-500/20',
    tags: ['Main HUD', 'Responsive', 'UX/UI'],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="relative py-32 overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-purple-500" />
            <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Showcase</span>
            <span className="w-8 h-px bg-purple-500" />
          </div>
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4">
            Major<span className="gradient-text"> Systems</span>
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass rounded-3xl border ${project.border} overflow-hidden transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Embedded Video Player */}
              <div className="relative w-full aspect-video bg-black/40">
                <iframe
                  src={project.embedUrl}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-orbitron font-bold text-2xl text-white">
                    {project.title}
                  </h3>
                  <div className="text-2xl" style={{ color: project.accent }}>
                    {project.icon}
                  </div>
                </div>
                
                <p className="text-slate-400 text-base leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md bg-white/5 text-slate-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}