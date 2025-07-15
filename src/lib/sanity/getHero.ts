import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'
import type { Image as SanityImageSource } from 'sanity'

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource | null | undefined) {
  return builder.image(source!)
}

type Hero = {
  heading: string
  subheading: string
  backgroundImage: SanityImageSource
  alt: string
  formTitle: string
  formDescription: string
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

  const data: Hero = await client.fetch(query)

  return {
    heading: data.heading,
    subheading: data.subheading,
    imageUrl: urlFor(data.backgroundImage).width(1600).url(),
    alt: data.alt,
    formTitle: data.formTitle,
    formDescription: data.formDescription,
  }
}
