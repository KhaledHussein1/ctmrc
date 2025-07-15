import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'
import type { Image as SanityImageSource } from 'sanity'

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource | null | undefined) {
  return builder.image(source!)
}

type GalleryItem = {
  _id: string
  caption: string
  alt: string
  image: SanityImageSource
}

export async function getGallery() {
  const query = `*[_type == "galleryItem"] | order(_createdAt desc) {
    _id,
    caption,
    alt,
    image
  }`

  const data: GalleryItem[] = await client.fetch(query)

  return data.map((item) => ({
    id: item._id,
    caption: item.caption,
    alt: item.alt,
    imageUrl: urlFor(item.image).width(800).url(),
  }))
}
