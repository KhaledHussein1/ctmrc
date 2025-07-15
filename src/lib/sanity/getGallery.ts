import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

export async function getGallery() {
  const query = `*[_type == "galleryItem"] | order(_createdAt desc) {
    _id,
    caption,
    alt,
    image
  }`

  const data = await client.fetch(query)

  return data.map((item: any) => ({
    id: item._id,
    caption: item.caption,
    alt: item.alt,
    imageUrl: urlFor(item.image).width(800).url(),
  }))
}
