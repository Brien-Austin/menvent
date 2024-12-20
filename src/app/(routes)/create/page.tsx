import Back from '@/app/components/layout/back'
import Hero from '@/app/components/layout/hero'
import CreatePost from '@/app/components/posts/create-post'

import React from 'react'

const Create = () => {
 
  return (
    <main className='p-8 flex flex-col w-full '>
      <Hero text='Create a Post'/>
     <Back/>
     <CreatePost/>
    </main>
  )
}



export default Create