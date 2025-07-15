import { client } from './client'

type FAQ = {
  _id: string
  question: string
  answer: string
}

export async function getFAQs() {
  const query = `*[_type == "faq"] | order(_createdAt asc) {
    _id,
    question,
    answer
  }`

  const data: FAQ[] = await client.fetch(query)

  return data.map((item) => ({
    id: item._id,
    question: item.question,
    answer: item.answer,
  }))
}
