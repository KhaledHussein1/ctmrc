// lib/sanity/getQuote.ts
import { client } from './client'

export async function getQuote() {
  const query = `*[_type == "quote"][0] {
    quoteText,
    attribution,
    source
  }`

  const data = await client.fetch(query)

  return {
    quoteText: data.quoteText,
    attribution: data.attribution,
    source: data.source,
  }
}
