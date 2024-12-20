import React from 'react'
import { dummyPosts } from '../dummy/data'
import PostCard from '../components/posts/post-card'
import { auth } from '../../../auth'


const App = async() => {
  const session = await auth()
  console.log(session?.user)
  console.log(dummyPosts)
  return (
<main className="flex flex-col gap-4 mb-20  ">
  {
    dummyPosts.map((p,i)=>(
      <PostCard key={i} postedTime={p.postedTime} username={p.username} profileUrl={p.profileUrl} postText={p.postText} likes={p.likes} comments={p.comments} />

    ))
  }


  
  
</main>
  )
}

export default App