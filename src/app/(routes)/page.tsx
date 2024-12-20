"use client"
import React from 'react'
import { dummyPosts } from '../dummy/data'
import PostCard from '../components/posts/post-card'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const App = () => {
  const {  status } = useSession()
  const router = useRouter()

  // Wait for the session to load before deciding
  if (status === 'loading') {
    return <div>Loading...</div>
  }

  // Only redirect if we're sure there's no session
  if (status === 'unauthenticated') {
    router.push('/login')
    return null
  }

  return (
    <main className="flex flex-col gap-4 mb-20">
      {dummyPosts.map((p, i) => (
        <PostCard 
          key={i} 
          postedTime={p.postedTime} 
          username={p.username} 
          profileUrl={p.profileUrl} 
          postText={p.postText} 
          likes={p.likes} 
          comments={p.comments} 
        />
      ))}
    </main>
  )
}

export default App