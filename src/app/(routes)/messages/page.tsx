import Back from '@/app/components/layout/back'
import Hero from '@/app/components/layout/hero'
import { prisma } from '@/lib/db'

import React from 'react'
import { categories } from '../../../../prisma/seed'

const Messages = async() => {
  const createdCategories = await prisma.$transaction(
    categories.map((category)=>
      prisma.category.create({
        data : category
      })
    )

  )

  console.log(createdCategories)
  return (
    <main className='p-8'>

      <Hero text='Messages'/>
      <Back/>
    </main>
  )
}

export default Messages