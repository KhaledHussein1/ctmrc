import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'
import type { Image as SanityImageSource } from 'sanity'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource | null | undefined) {
  return builder.image(source!)
}
