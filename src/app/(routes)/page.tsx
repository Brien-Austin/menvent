"use client"
import React, { useEffect, useState } from 'react'

import PostCard from '../components/posts/post-card'

import { getPosts } from '../actions/post'
import { PostType } from '../types/post'



const App = () => {
  const [posts, setPosts] = useState<PostType[]>([])



  const fetchPosts = async () => {
    const newPosts = await getPosts()
    setPosts(newPosts)
  }
  const POLLING_INTERVAL = 3000

  useEffect(() => {
 
    fetchPosts()

    const interval = setInterval(fetchPosts, POLLING_INTERVAL)

  
    return () => clearInterval(interval)
  }, [])
 

  return (
    <main className="flex flex-col gap-4 mb-20 sm:p-5 lg:p-0">
      { posts.map((p, i) => (
        <PostCard 
    
        likedData={p.likes}
          key={i} 
          id={p.id}
          userId={p.userId}
          postedTime={p.createdAt} 
          username={p.user.name!} 
          profileUrl={p.user.image!} 
          postText={p.postText!} 
          likes={p.likes?.length} 
          comments={p.comments?.length} 
        />
      ))}
    </main>
  )
}

export default App