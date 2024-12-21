"use client"

import Back from '@/app/components/layout/back'
import Hero from '@/app/components/layout/hero'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

import React from 'react'

const Profile = () => {
  return (
    <main className='p-8 w-full flex-1 '>

      <Hero text='Profile'/>
      <Back/>
      <div onClick={()=>signOut()} className="mt-6 border w-full h-16 shadow-md rounded-lg flex p-3 items-center  gap-3 cursor-pointer">
        <LogOut/> 
        <h1>Logout</h1>

      </div>
    </main>
  )
}

export default Profile