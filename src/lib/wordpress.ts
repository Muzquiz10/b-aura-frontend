// src/lib/wordpress.ts

const WP_API_URL = 'https://beta.b-aura.es/wp-json/wp/v2'

export async function getPosts() {
  const res = await fetch(`${WP_API_URL}/posts`)
  if (!res.ok) {
    throw new Error('Error al traer posts de WordPress')
  }
  return res.json()
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${WP_API_URL}/posts?slug=${slug}`)
  if (!res.ok) {
    throw new Error('Error al traer post por slug')
  }
  const posts = await res.json()
  return posts[0]
}