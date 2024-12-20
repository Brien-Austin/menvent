"use client";
import { useSideBarRoutes } from '@/app/hooks/useSideBarRoutes'
import React from 'react'
import SideBarItems from './sidebar-items'

const SideBarMenus = () => {
    const {routes} = useSideBarRoutes()
    
  return (
     <section>  {
            routes.map((r,i)=>(
                <SideBarItems key={i} route={r.route}label={r.label} icon={r.icon} slug={r.slug} />
            ))
        }
      </section>
  )
}

export default SideBarMenus