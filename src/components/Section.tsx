'use client'

import Image from 'next/image'

type SectionProps = {
  section: {
    title: string
    description: string
    cta?: { label: string; href: string } | null
    imageUrl: string
    imageLeft?: boolean
  }
}

export function Section({ section }: SectionProps) {
  const { title, description, cta, imageUrl, imageLeft = false } = section

  return (
    <section className="flex flex-col md:flex-row items-center gap-8 px-6 py-16 max-w-7xl mx-auto">
      <div
        className={`${
          imageLeft ? 'order-2 md:order-1' : 'order-1'
        } w-full max-w-xl md:max-w-2xl relative h-[300px] md:h-[400px]`}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>
      <div
        className={`${
          imageLeft ? 'order-1 md:order-2' : 'order-2'
        } w-full max-w-xl`}
      >
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-6">{description}</p>
        {cta && (
          <a
            href={cta.href}
            className="inline-block bg-[#1c7c54] text-white px-6 py-3 rounded-full font-medium hover:bg-[#146943] transition"
          >
            {cta.label}
          </a>
        )}
      </div>
    </section>
  )
}
