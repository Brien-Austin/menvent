"use client"

import { useSideBarRoutes } from '@/app/hooks/useSideBarRoutes'

import { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
interface SideBarItemsProps {
    icon : LucideIcon,
    label : string,
    slug : string,
    route : string
}

const SideBarItems: React.FC<SideBarItemsProps> = ({ icon: Icon, label, route }) => {
    const pathname = usePathname()
    console.log('Pathname',pathname)
    console.log('Route',route)
    const isActive = pathname.replace(/\/$/, '') === route.replace(/\/$/, '');

    return (
        <Link href={route} className={`flex items-center space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-neutral-900 dark:rounded-lg dark:px-3 dark:transition dark:delay-50 dark:py-2 cursor-pointer ` }>
          
            <div className="w-8 flex justify-center">
                <Icon className={`  ${isActive && 'dark:text-purple-600 '}`} />
            </div>
       
            <div className={`flex-1 text-left ${isActive && ''}`}>
                {label}
            </div>
        </Link>
    );
};


const SideBar = () => {
  
    const {routes} = useSideBarRoutes()
  return (
 <aside className='h-screen fixed top-24 left-0 flex-shrink-0 w-[24rem] border-r p-8 flex flex-col  '>
  <section>  {
        routes.map((r,i)=>(
            <SideBarItems key={i} route={r.route}label={r.label} icon={r.icon} slug={r.slug} />
        ))
    }
  </section>

<hr className='mt-6 border-neutral-600'/>
  <section className='fixed left-5 bottom-5'><div className="flex items-center gap-2">
  <div className="w-12 h-12 rounded-full ring-2 ring-white relative overflow-hidden">
  <Image
    src={'https://api.dicebear.com/7.x/avataaars/svg?seed=1'}
    fill
    alt="profile"
    className="object-cover"
  />
</div>
<h1>Brien</h1>

  </div>


  </section>

 </aside>
  )
}




export default SideBar