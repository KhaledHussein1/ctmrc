import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'
import type { Image as SanityImageSource } from 'sanity'

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource | null | undefined) {
  return builder.image(source!)
}

type HomepageGalleryItem = {
  _id: string
  image: SanityImageSource
  alt: string
}

export async function getHomepageGallery() {
  const query = `*[_type == "homeGalleryItem" && showOnHomepage == true] | order(_createdAt desc)[0...10] {
    _id,
    image,
    alt
  }`

  const data: HomepageGalleryItem[] = await client.fetch(query)

  return data.map((item) => ({
    id: item._id,
    alt: item.alt,
    imageUrl: urlFor(item.image).width(600).height(400).url(),
  }))
}
