// lib/sanity/getCommunityContent.ts
import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

export async function getCommunityContent() {
  const query = `*[_type == "communityPage"][0] {
    mainImage,
    altText,
    paragraphs,
    quote,
    quoteAuthor,
    involvementPoints
  }`

  const data = await client.fetch(query)

  return {
    imageUrl: urlFor(data.mainImage).width(600).height(450).url(),
    altText: data.altText,
    paragraphs: data.paragraphs,
    quote: data.quote,
    quoteAuthor: data.quoteAuthor,
    involvementPoints: data.involvementPoints,
  }
}
