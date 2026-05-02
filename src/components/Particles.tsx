import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
  shape: 'circle' | 'diamond' | 'square';
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#a855f7', '#ec4899', '#3b82f6', '#06b6d4', '#8b5cf6'];
    const shapes: Particle['shape'][] = ['circle', 'diamond', 'square'];

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 20,
      size: Math.random() * 3 + 1,
      speedY: Math.random() * 0.8 + 0.2,
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.6 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    });

    // Initialize particles
    for (let i = 0; i < 60; i++) {
      const p = createParticle();
      p.y = Math.random() * canvas.height;
      particlesRef.current.push(p);
    }

    const drawParticle = (p: Particle) => {
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 6;

      if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'diamond') {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y - p.size * 1.5);
        ctx.lineTo(p.x + p.size, p.y);
        ctx.lineTo(p.x, p.y + p.size * 1.5);
        ctx.lineTo(p.x - p.size, p.y);
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.fillRect(p.x - p.size, p.y - p.size, p.size * 2, p.size * 2);
      }
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        drawParticle(p);

        if (p.y < -20) {
          particlesRef.current[i] = createParticle();
        }
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  );
}
