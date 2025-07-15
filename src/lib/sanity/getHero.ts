// lib/sanity/getHero.ts
import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

export async function getHero() {
  const query = `*[_type == "hero"][0] {
    heading,
    subheading,
    backgroundImage,
    alt,
    formTitle,
    formDescription
  }`

  const data = await client.fetch(query)

  return {
    heading: data.heading,
    subheading: data.subheading,
    imageUrl: urlFor(data.backgroundImage).width(1600).url(),
    alt: data.alt,
    formTitle: data.formTitle,
    formDescription: data.formDescription,
  }
}
