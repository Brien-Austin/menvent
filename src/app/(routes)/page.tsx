
import React from 'react'

import PostCard from '../components/posts/post-card'
import { prisma } from '@/lib/db'


const App = async() => {
  const posts = await prisma.post.findMany({
    include : {
      user : true,
      likes : true,
      comments : true
    },
    orderBy : {
      createdAt : 'desc'
    }
  })
  console.log(posts)
 

  return (
    <main className="flex flex-col gap-4 mb-20">
      {posts.map((p, i) => (
        <PostCard 
          key={i} 
          postedTime={p.createdAt} 
          username={p.user.name!} 
          profileUrl={p.user.image!} 
          postText={p.postText} 
          likes={p.likes.length} 
          comments={p.comments.length} 
        />
      ))}
    </main>
  )
}

export default App