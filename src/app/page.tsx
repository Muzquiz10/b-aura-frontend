// src/app/page.tsx
import { getPosts } from '../lib/wordpress'

export default async function Home() {
  const posts = await getPosts()

  return (
    <main style={{ padding: '2rem' }}>
      <h1>B-AURA Beta — Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <a href={post.link} target="_blank">
              {post.title.rendered}
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
