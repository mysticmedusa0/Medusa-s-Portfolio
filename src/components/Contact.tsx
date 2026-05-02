import { useEffect, useRef, useState } from 'react';

const contactMethods = [
  {
    icon: '💬',
    label: 'Discord',
    value: 'mysticmedusa0',
    desc: 'Fastest response — usually within a few hours just Add me and DM!',
    href: 'https://discordapp.com/users/1363175991190491337',
    color: 'from-indigo-500/20 to-blue-600/20',
    border: 'border-indigo-500/20',
    accent: '#6366f1',
  },
  {
    icon: '🎮',
    label: 'Roblox',
    value: '@GloryKinght',
    desc: 'Follow me on roblox for game updates and collabs',
    href: 'https://www.roblox.com/users/531404/profile',
    color: 'from-red-500/20 to-rose-600/20',
    border: 'border-red-500/20',
    accent: '#ef4444',
  },
  {
    icon: '🐦',
    label: 'Twitter / X',
    value: '@mysticmedusa0',
    desc: 'Dev updates, WIPs and random thoughts',
    href: 'https://x.com/mysticmedusa0',
    color: 'from-sky-500/20 to-cyan-600/20',
    border: 'border-sky-500/20',
    accent: '#0ea5e9',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    // Live EST Clock
    const timer = setInterval(() => {
      const estTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      }).format(new Date());
      setTime(estTime);
    }, 1000);

    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, []);

  return (
    <section id="contact" className="relative py-32 overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-purple-500/40" />

      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-purple-500" />
            <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Connect</span>
            <span className="w-8 h-px bg-purple-500" />
          </div>
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4">
            Let's<span className="gradient-text"> Stay in Touch</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Currently open to new projects and scripting commissions. Reach out on any of these platforms!
          </p>
        </div>

        {/* Contact Methods */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {contactMethods.map((method, i) => (
            <a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-6 glass rounded-xl border border-white/5 hover:border-white/20 card-glow transition-all duration-300 transform hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform group-hover:scale-110"
                style={{ background: `${method.accent}20`, border: `1px solid ${method.accent}30` }}
              >
                {method.icon}
              </div>
              <span className="font-semibold text-white text-base">{method.label}</span>
              <div className="font-orbitron text-xs text-purple-300 mt-1">{method.value}</div>
              <div className="text-slate-500 text-xs mt-2">{method.desc}</div>
            </a>
          ))}
        </div>

        {/* Availability box with Live EST Time */}
        <div className={`mt-12 inline-block glass-purple rounded-2xl p-6 border border-purple-500/20 transition-all duration-700 delay-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="font-semibold text-white text-sm">Status: Available for Hire</span>
          </div>
          <p className="text-slate-400 text-sm">
            Time For Me (EST): <span className="text-white font-mono">{time || 'Loading...'}</span>
          </p>
          <p className="text-slate-500 text-xs mt-1 italic">
            Fastest response: <span className="text-purple-300">Under 6 hours</span>
          </p>
        </div>
      </div>
    </section>
  );
}