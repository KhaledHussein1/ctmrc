import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'
import type { Image as SanityImageSource } from 'sanity' 

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource | null | undefined) {
  return builder.image(source!)
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
    imageUrl: urlFor(data.mainImage)?.width(600).height(450).url(),
    altText: data.altText,
    paragraphs: data.paragraphs,
    quote: data.quote,
    quoteAuthor: data.quoteAuthor,
    involvementPoints: data.involvementPoints,
  }
}
