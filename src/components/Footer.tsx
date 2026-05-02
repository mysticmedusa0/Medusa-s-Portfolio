export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-orbitron font-black gradient-text tracking-widest text-lg">MEDUSA</span>
            <span className="text-slate-600 text-xs">·</span>
            <span className="text-slate-500 text-xs">Roblox Developer & UI Designer</span>
          </div>

          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <span>Crafted with</span>
            <span className="text-pink-400 mx-1">♥</span>
            <span>and a lot of Lua</span>
            <span className="ml-2">🐍</span>
          </div>

          <div className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Medusa. All rights reserved.
          </div>
        </div>

        {/* Divider glow line */}
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>
    </footer>
  );
}
