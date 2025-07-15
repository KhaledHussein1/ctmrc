// lib/sanity/getFAQs.ts
import { client } from './client'

export async function getFAQs() {
  const query = `*[_type == "faq"] | order(_createdAt asc) {
    _id,
    question,
    answer
  }`

  const data = await client.fetch(query)

  return data.map((item: any) => ({
    id: item._id,
    question: item.question,
    answer: item.answer,
  }))
}
