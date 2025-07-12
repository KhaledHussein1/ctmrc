'use client';

import Image from 'next/image';
import galleryData from '@/content/gallery.json';

export default function GalleryPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">
        {galleryData.title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryData.images.map(({ src, alt, caption }) => (
          <div
            key={src}
            className="rounded-xl overflow-hidden shadow-lg bg-[#111] hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={src}
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
  );
}
