'use client';

import { useRef, useEffect } from 'react';

export function QuoteSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    const numStars = 30;
    const speed = 0.15;

    // Generate stars using polar coordinates to spread more evenly
    const stars = Array.from({ length: numStars }).map(() => {
      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.sqrt(Math.random()) * width; // less clustering near center
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        z: Math.random() * width,
      };
    });

    let animationFrameId: number;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fillRect(0, 0, width, height);

      for (const star of stars) {
        star.z -= speed;
        if (star.z <= 0) {
          const angle = Math.random() * 2 * Math.PI;
          const radius = Math.sqrt(Math.random()) * width;
          star.x = Math.cos(angle) * radius;
          star.y = Math.sin(angle) * radius;
          star.z = width;
        }

        const k = 128.0 / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        if (px >= 0 && px < width && py >= 0 && py < height) {
          const size = (1 - star.z / width) * 2;
          ctx.fillStyle = '#FFDF00'; // ✅ Tailwind green-600 (button green)
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-black">
      {/* Green star warp background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Quote Content */}
      <blockquote className="relative max-w-4xl mx-auto text-center text-white italic font-semibold text-2xl md:text-3xl animate-fade-in px-4 z-10">
        “The best of people are those that bring most benefit to the rest of mankind.”
      </blockquote>

      <cite className="relative mt-8 block text-center text-green-300 font-bold text-lg md:text-xl drop-shadow-lg animate-fade-in delay-300 z-10">
        — Prophet Muhammad ﷺ <span className="text-sm font-normal">(Sahih Muslim)</span>
      </cite>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}
