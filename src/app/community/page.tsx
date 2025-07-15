'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getCommunityContent } from '@/lib/sanity/getCommunityContent'

interface CommunityContent {
  imageUrl: string
  altText: string
  paragraphs: string[]
  quote: string
  quoteAuthor: string
  involvementPoints: string[]
}

export default function CommunityPage() {
  const [content, setContent] = useState<CommunityContent | null>(null)

  useEffect(() => {
    getCommunityContent().then(setContent)
  }, [])

  if (!content) return null

  return (
    <div className="p-8 max-w-6xl mx-auto text-white space-y-16">
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">Our Community</h1>

      <section className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
        <div className="md:flex-1 flex justify-center md:justify-start order-1 md:order-none relative max-w-[600px] w-full max-h-[450px] h-auto">
          <Image
            src={content.imageUrl}
            alt={content.altText}
            width={600}
            height={450}
            className="rounded-2xl shadow-2xl object-contain"
          />
        </div>

        <div className="md:flex-1 space-y-6 max-w-xl order-2 md:order-none">
          {content.paragraphs.map((para, idx) => (
            <p key={idx} className="text-gray-300 text-lg leading-relaxed">{para}</p>
          ))}
          <blockquote className="italic text-[#1c7c54] font-semibold border-l-4 border-[#1c7c54] pl-4">
            “{content.quote}”<br />— {content.quoteAuthor}
          </blockquote>
        </div>
      </section>

      <section className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-center mb-6 tracking-wide">Get Involved</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg leading-relaxed">
          {content.involvementPoints.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
