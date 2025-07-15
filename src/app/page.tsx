'use client'

import { useEffect, useState } from 'react'
import { Hero } from '../components/Hero'
import { Section } from '../components/Section'
import { QuoteSection } from '../components/QuoteSection'
import GalleryCarousel from '../components/GalleryCarousel'
import EventsSection from '../components/EventsSection'
import { getHomepageSections } from '@/lib/sanity/getHomepageSections'

interface HomepageSection {
  id: string
  title: string
  description: string
  cta?: { label: string; href: string }
  imageUrl: string
  imageLeft?: boolean
}

export default function HomePage() {
  const [sections, setSections] = useState<HomepageSection[]>([])

  useEffect(() => {
    getHomepageSections().then(setSections)
  }, [])

  return (
    <main>
      <Hero />
      <EventsSection />
      {sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
      <GalleryCarousel />
      <QuoteSection />
    </main>
  )
}
