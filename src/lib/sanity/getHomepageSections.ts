// lib/sanity/getHomepageSections.ts
import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
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

  const data = await client.fetch(query)

  return data.map((item: any) => ({
    id: item._id,
    title: item.title,
    description: item.description,
    cta: item.ctaLabel && item.ctaHref ? { label: item.ctaLabel, href: item.ctaHref } : null,
    imageUrl: urlFor(item.image).width(1200).url(),
    alt: item.alt || '',
    imageLeft: item.imageLeft,
  }))
}
