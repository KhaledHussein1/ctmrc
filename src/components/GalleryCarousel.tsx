'use client';

import { useRef, useState } from 'react';

const images = [
  '/g1.jpg',
  '/g2.jpg',
  '/g3.jpg',
  '/g4.jpg',
  '/g5.jpg',
  '/g6.jpg',
];

export default function SmoothAutoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full bg-white py-12 overflow-hidden select-none">
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex gap-8 whitespace-nowrap px-8 will-change-transform 
          ${isHovered ? 'animation-paused' : 'animation-running'}`}
        style={{
          animation: 'scrollLeft 30s linear infinite',
        }}
      >
        {/* Duplicate images for seamless loop */}
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className={`inline-block flex-shrink-0 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 ${
              isHovered ? 'scale-105 shadow-2xl' : 'scale-100'
            }`}
            style={{ width: 280, height: 180 }}
          >
            <img
              src={src}
              alt={`Gallery image ${i % images.length + 1}`}
              className="w-full h-full object-cover"
              draggable={false}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animation-paused {
          animation-play-state: paused !important;
        }
        .animation-running {
          animation-play-state: running !important;
        }
      `}</style>
    </section>
  );
}
