'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getGallery } from '@/lib/sanity/getGallery'

interface GalleryItem {
  id: string
  caption: string
  alt: string
  imageUrl: string
}

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([])

  useEffect(() => {
    getGallery().then(setItems)
  }, [])

  return (
    <div className="p-8 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map(({ id, imageUrl, alt, caption }) => (
          <div
            key={id}
            className="rounded-xl overflow-hidden shadow-lg bg-[#111] hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={imageUrl}
                alt={alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-gray-300 text-lg">{caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
