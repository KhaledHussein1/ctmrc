'use client';

// @ts-ignore
import galleryData from '../../content/gallery.json'; // adjust path based on your file structure

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export default function GalleryPage() {
  const images: GalleryImage[] = galleryData.images || [];

  return (
    <div className="p-8 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map(({ src, alt, caption }) => (
          <div
            key={src}
            className="rounded-xl overflow-hidden shadow-lg bg-[#111] hover:shadow-2xl transition-shadow duration-300"
          >
            <img src={src} alt={alt} className="w-full h-56 object-cover" loading="lazy" />
            <div className="p-4 text-center">
              <p className="text-gray-300 text-lg">{caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
