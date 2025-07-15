'use client'

import { useEffect, useState } from 'react'
import { getFAQs } from '@/lib/sanity/getFAQs'

interface FAQItem {
  id: string
  question: string
  answer: string
}

export default function ContactPage() {
  const [faqs, setFaqs] = useState<FAQItem[]>([])

  useEffect(() => {
    getFAQs().then(setFaqs)
  }, [])

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-12 text-white">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-300">
          Have a question or just want to connect? We&apos;d love to hear from you.
        </p>
      </div>

      {/* Contact Form */}
      <form
        action="https://getform.io/f/bkknrryb"
        method="POST"
        className="bg-[#111] border border-white/10 rounded-xl p-6 space-y-4 shadow-lg"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="flex-1 px-4 py-3 rounded-md bg-black border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1c7c54]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="flex-1 px-4 py-3 rounded-md bg-black border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1c7c54]"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-md bg-black border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1c7c54]"
        />
        <button
          type="submit"
          className="bg-[#1c7c54] text-white px-6 py-3 rounded-full font-medium hover:bg-[#146943] transition w-full sm:max-w-[200px] mx-auto block"
        >
          Send Message
        </button>

        {/* Prevent spam */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
      </form>

      {/* FAQs */}
      {faqs.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ id, question, answer }) => (
              <div
                key={id}
                className="bg-[#111] p-4 rounded-lg border border-white/10 shadow-sm"
              >
                <h3 className="font-semibold text-lg text-white">{question}</h3>
                <p className="text-gray-300 mt-1">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
