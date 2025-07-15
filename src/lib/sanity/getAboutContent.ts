// lib/sanity/getAboutContent.ts
import { client } from './client'

export async function getAboutContent() {
  const query = `*[_type == "aboutPage"][0] {
    title,
    intro,
    beliefsTitle,
    beliefs,
    joinTitle,
    joinText
  }`

  const data = await client.fetch(query)

  return {
    title: data.title,
    intro: data.intro,
    beliefsTitle: data.beliefsTitle,
    beliefs: data.beliefs,
    joinTitle: data.joinTitle,
    joinText: data.joinText,
  }
}
