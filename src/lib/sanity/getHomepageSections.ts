import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'
import type { Image as SanityImageSource } from 'sanity'

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource | null | undefined) {
  return builder.image(source!)
}

type HomepageSection = {
  _id: string
  title: string
  description: string
  ctaLabel?: string
  ctaHref?: string
  image: SanityImageSource
  alt?: string
  imageLeft?: boolean
}

export async function getHomepageSections() {
  const query = `*[_type == "section"] | order(order asc) {
    _id,
    title,
    description,
    ctaLabel,
    ctaHref,
    image,
    alt,
    imageLeft
  }`

  const data: HomepageSection[] = await client.fetch(query)

  return data.map((item) => ({
    id: item._id,
    title: item.title,
    description: item.description,
    cta: item.ctaLabel && item.ctaHref
      ? { label: item.ctaLabel, href: item.ctaHref }
      : undefined,
    imageUrl: urlFor(item.image).width(1200).url(),
    alt: item.alt || '',
    imageLeft: item.imageLeft ?? false,
  }))
}
