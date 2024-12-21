import Back from '@/app/components/layout/back'
import Hero from '@/app/components/layout/hero'
import CreatePost from '@/app/components/posts/create-post'

import React from 'react'
import { auth } from '../../../../auth'

const Create = async() => {
  const session = await auth()
 
  return (
    <main className='p-8 flex flex-col w-full  h-full'>
      <Hero text='Create a Post'/>
     <Back/>
 {
  session?.user.id &&     <CreatePost userId={session?.user.id}/>
 }
    </main>
  )
}



export default Create