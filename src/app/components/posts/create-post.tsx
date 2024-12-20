import { ChevronDown,  Globe } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const CreatePost = () => {
  return (
   <article className="mt-3 w-3/5 border shadow-md  h-[28rem] rounded-xl bg-[#161616] p-5 relative">
   <div className='flex items-center gap-4'>
   <div className="w-10 h-10 rounded-full ring-2 ring-white relative overflow-hidden">
      <Image
        src={'https://api.dicebear.com/7.x/avataaars/svg?seed=1'}
        fill
        alt="profile"
        className="object-cover"
      />
    </div>
    <div className="text-sm flex items-center gap-1 text-neutral-100 px-2 cursor-pointer py-1 bg-neutral-800 rounded-full">
       <Globe size={15}/> Public <span><ChevronDown size={15}/></span>
    </div>
   </div>
   <div className="absolute bottom-5 right-5  border px-3 cursor-pointer py-1 rounded-full bg-purple-700">
   
    Next
    
   </div>
   </article>
  )
}

export default CreatePost