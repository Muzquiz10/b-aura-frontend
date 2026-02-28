import { getPostBySlug } from '../../../lib/wordpress'

interface Props {
  params: { slug: string }
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) return <p>Post no encontrado</p>

  return (
    <main style={{ padding: '2rem' }}>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <p><em>{new Date(post.date).toLocaleDateString()}</em></p>
      <article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </main>
  )
}

import { getPosts } from '../../../lib/wordpress'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post: any) => ({
    slug: post.slug
  }))
}