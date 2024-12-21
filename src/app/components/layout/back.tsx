"use client"
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import React from 'react'

const Back = () => {
    const router = useRouter()
  return (
    <div onClick={()=>{router.back()}} className="lg:flex sm:hidden items-center gap-2 mt-4 border border-neutral-800 w-fit rounded-full px-3 py-2 hover:bg-neutral-900 cursor-pointer">
    <ChevronLeft className='' size={18}/><h1 className='cursor-pointer'> Back</h1>
    </div>
  )
}

export default Back