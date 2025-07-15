// lib/sanity/getHomepageGallery.ts
import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

export async function getHomepageGallery() {
  const query = `*[_type == "homeGalleryItem" && showOnHomepage == true] | order(_createdAt desc)[0...10] {
    _id,
    image,
    alt
  }`

  const data = await client.fetch(query)

  return data.map((item: any) => ({
    id: item._id,
    alt: item.alt,
    imageUrl: urlFor(item.image).width(600).height(400).url(),
  }))
}
