import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Scripting',
    icon: '⚙️',
    color: 'from-purple-500 to-violet-600',
    glow: 'rgba(139,92,246,0.4)',
    skills: [
      { name: 'Lua / Luau', level: 95 },
      { name: 'Server Scripts', level: 90 },
      { name: 'Local Scripts', level: 92 },
      { name: 'Module Scripts', level: 98 },
      { name: 'Remote Events/Functions', level: 80 },
    ],
  },
  {
    title: 'UI Design',
    icon: '🎨',
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236,72,153,0.4)',
    skills: [
      { name: 'UI Layout & Frames', level: 92 },
      { name: 'Tween Animations', level: 100 },
      { name: 'Custom Components', level: 85 },
      { name: 'Responsive Design', level: 97 },
      { name: 'Visual Polish', level: 96 },
    ],
  },
  {
    title: 'Game Systems',
    icon: '🎮',
    color: 'from-blue-500 to-cyan-600',
    glow: 'rgba(59,130,246,0.4)',
    skills: [
      { name: 'Datastores', level: 100 },
      { name: 'Game Loops', level: 82 },
      { name: 'NPC / AI Logic', level: 72 },
      { name: 'Physics & Raycasting', level: 70 },
      { name: 'Inventory Systems', level: 80 },
    ],
  },
];

const tools = [
  { name: 'Roblox Studio', icon: '🏗️' },
  { name: 'Figma', icon: '🖌️' },
  { name: 'Luau', icon: '🔷' },
  { name: 'VS Code', icon: '💻' },
  { name: 'Git', icon: '🌿' },
  { name: 'Blender', icon: '🎲' },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setAnimated(true), delay); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{name}</span>
        <span className="text-xs font-bold text-slate-400 font-orbitron">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all ease-out`}
          style={{
            width: animated ? `${level}%` : '0%',
            transitionDuration: '1.2s',
            transitionDelay: `${delay}ms`,
            boxShadow: animated ? `0 0 8px var(--glow)` : 'none',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
    <section id="skills" className="relative py-32 overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-purple-500" />
            <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">My Toolkit</span>
            <span className="w-8 h-px bg-purple-500" />
          </div>
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4">
            Skills &<span className="gradient-text"> Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Three years of grinding. Here's what I've mastered.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`glass rounded-2xl p-6 border border-white/5 card-glow transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${ci * 100 + 100}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg shadow-lg`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-white">{cat.title}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    delay={si * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools row */}
        <div
          className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h3 className="text-center text-slate-400 text-sm font-semibold tracking-widest uppercase mb-6">Tools I Use</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 px-4 py-2.5 glass-purple rounded-xl border border-purple-500/20 text-sm font-medium text-slate-300 hover:text-white hover:border-purple-400/50 hover:scale-105 transition-all duration-200 cursor-default"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="text-base">{tool.icon}</span>
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
