"use client"

import { useAppSelector } from '@/app/store/store'
import { usePathname } from 'next/navigation'
import React from 'react'

const RightSideBar = () => {
    const currentTab = useAppSelector((state) => state.navigation.currentTab)
    const pathname = usePathname()
    
   
    if ( pathname != "/") return null;

    return (
        <aside>
          <div className='lg:h-screen sm:hidden lg:fixed lg:right-0 lg:top-24 lg:flex-shrink-0 lg:w-[24rem] lg:border-l lg:p-8 lg:flex'>
  {currentTab}
</div>

        </aside>
    )
}

export default RightSideBar
