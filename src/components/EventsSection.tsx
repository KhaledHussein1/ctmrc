'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getEvent } from '@/lib/sanity/getEvent'

interface EventData {
  title: string
  date: string
  location: string
  description: string
  link: string
  imageUrl: string
  alt: string
}

export default function EventsSection() {
  const [event, setEvent] = useState<EventData | null>(null)

  useEffect(() => {
    getEvent().then(setEvent)
  }, [])

  if (!event) return null

  return (
    <section className="w-full mt-0 mb-16 px-6 md:px-12 lg:px-20 py-8 rounded-2xl bg-gradient-to-r from-[#1c7c54]/10 to-[#146943]/10 shadow-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-[#1c7c54] tracking-wide max-w-5xl mx-auto">
        Upcoming Event
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
        {/* Text Content */}
        <div className="md:flex-1 space-y-4">
          <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
            <span className="font-semibold text-[#1c7c54]">{event.title}</span>
            <br />
            {event.date}
            <br />
            {event.location}
          </p>
          <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
            {event.description}
          </p>
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1c7c54] hover:bg-[#146943] text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            Learn More & Register
          </a>
        </div>

        {/* Image */}
        <div className="md:flex-1 flex justify-center relative w-full max-w-[500px] h-auto">
          <Image
            src={event.imageUrl}
            alt={event.alt}
            width={500}
            height={300}
            className="rounded-xl shadow-lg object-contain"
          />
        </div>
      </div>
    </section>
  )
}
