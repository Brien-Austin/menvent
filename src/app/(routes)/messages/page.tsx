import Back from '@/app/components/layout/back'
import Hero from '@/app/components/layout/hero'
import MobileNavBar from '@/app/components/layout/mobile-navbar'
import React from 'react'

const Messages = () => {
  return (
    <main className='p-8'>
       <MobileNavBar/>
      <Hero text='Messages'/>
      <Back/>
    </main>
  )
}

export default Messages