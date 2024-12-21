import Back from '@/app/components/layout/back'
import Hero from '@/app/components/layout/hero'
import MobileNavBar from '@/app/components/layout/mobile-navbar'
import React from 'react'

const Rooms = () => {
  return (
    <main className='p-8'>
      <MobileNavBar/>
      <Hero text='Rooms'/>
      <Back/>
    </main>
  )
}

export default Rooms