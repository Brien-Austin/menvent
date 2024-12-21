'use client'

import { useMobileNavRoutes } from '@/app/hooks/useMobileNavBar'
import { type LucideIcon,  Sparkle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import ProfileComponent from './profile-component'

const MobileNavBar = () => {
  const { routes } = useMobileNavRoutes()
  const pathname = usePathname()

  return (
    <div className='fixed bottom-0 left-0 w-full h-16 bg-gradient-to-r from-[#252525]  to-[#161616] sm:block sm:z-50 lg:hidden'>
      <div className='relative flex items-center justify-around h-full px-4'>
        {routes.slice(0, 2).map((n, i) => (
          <MobileNavBarItem key={i} icon={n.icon} route={n.route} isActive={pathname === n.route} />
        ))}
        <CreateButton />
        {routes.slice(2, 4).map((n, i) => (
          <MobileNavBarItem key={i + 2} icon={n.icon} route={n.route} isActive={pathname === n.route} />
        ))}
      </div>
    </div>
  )
}

interface MobileNavItemProps {
  route: string
  icon?: LucideIcon
  isActive: boolean
}

const MobileNavBarItem: React.FC<MobileNavItemProps> = ({ icon: Icon, route, isActive }) => {
  return (
    <Link href={route} className={`flex flex-col items-center justify-center ${isActive ? 'text-purple-600' : 'text-purple-200'}`}>
     {
        Icon ? <Icon className='w-6 h-6' />: <ProfileComponent/>
     }
    
    </Link>
  )
}

const CreateButton = () => {
  return (
    <Link href={'/create'}
      className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-[#252525] ring-2 ring-purple-600 hover:bg-purple-600 text-white shadow-lg flex justify-center items-center"
   
    >
     <Sparkle size={24}/>
      <span className="sr-only">Create</span>
    </Link>
  )
}

export default MobileNavBar

