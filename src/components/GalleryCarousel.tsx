'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { getHomepageGallery } from '@/lib/sanity/getHomepageGallery'

interface GalleryImage {
  id: string
  imageUrl: string
  alt: string
}

export default function SmoothAutoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [images, setImages] = useState<GalleryImage[]>([])

  useEffect(() => {
    getHomepageGallery().then(setImages)
  }, [])

  if (!images.length) return null

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
        {[...images, ...images].map(({ id, imageUrl, alt }, i) => (
          <div
            key={`${id}-${i}`}
            className={`inline-block flex-shrink-0 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 ${
              isHovered ? 'scale-105 shadow-2xl' : 'scale-100'
            }`}
            style={{ width: 280, height: 180, position: 'relative' }}
          >
            <Image
              src={imageUrl}
              alt={alt}
              fill
              sizes="280px"
              style={{ objectFit: 'cover' }}
              priority={i < images.length}
              draggable={false}
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
  )
}

