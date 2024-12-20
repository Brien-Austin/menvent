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
            <div className='h-screen fixed right-0 top-24 flex-shrink-0 w-[24rem] border-l p-8'>
                {currentTab}
            </div>
        </aside>
    )
}

export default RightSideBar
