// lib/sanity/getEvent.ts
import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

export async function getEvent() {
  const query = `*[_type == "event"][0] {
    title,
    date,
    location,
    description,
    link,
    image,
    alt
  }`

  const data = await client.fetch(query)

  return {
    title: data.title,
    date: data.date,
    location: data.location,
    description: data.description,
    link: data.link,
    imageUrl: urlFor(data.image).width(800).url(),
    alt: data.alt,
  }
}
