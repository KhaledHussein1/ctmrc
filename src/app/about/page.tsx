'use client'

import { useEffect, useState } from 'react'
import { getAboutContent } from '@/lib/sanity/getAboutContent'

interface Belief {
  title: string
  description: string
}

interface AboutContent {
  title: string
  intro: string[]
  beliefsTitle: string
  beliefs: Belief[]
  joinTitle: string
  joinText: string
}

export default function AboutPage() {
  const [content, setContent] = useState<AboutContent | null>(null)

  useEffect(() => {
    getAboutContent().then(setContent)
  }, [])

  if (!content) return null

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-10 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">{content.title}</h1>

      <section className="space-y-4">
        {content.intro.map((p, i) => (
          <p key={i} className="text-gray-300 text-lg leading-relaxed">
            {p}
          </p>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">{content.beliefsTitle}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {content.beliefs.map((belief, i) => (
            <li key={i}>
              <strong>{belief.title}:</strong> {belief.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">{content.joinTitle}</h2>
        <p className="text-gray-300 text-lg leading-relaxed">{content.joinText}</p>
      </section>
    </div>
  )
}
