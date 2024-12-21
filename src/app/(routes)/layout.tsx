"use client"
import React, { useEffect, useState } from "react";
import SideBar from "../components/layout/sidebar";
import RightSideBar from "../components/layout/right-sidebar";
import Header from "../components/layout/header";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import MobileNavBar from "../components/layout/mobile-navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
 
    const [currentTab, setCurrentTab] = useState<string | null>(null);
    const {  status } = useSession()
    const router = useRouter()
    const pathname = usePathname()
    useEffect(() => {
        
        const savedTab = localStorage.getItem("currentTab");
        setCurrentTab(savedTab);
      }, []);
    if(  pathname != "/"){
        return (
            <>
            <SideBar/>
            <div className="flex mt-0 w-full"><Header/>
            {children}</div>
            </>
        )
    }
   
  
  
    if (status === 'loading') {
      return <main className="p-5">
        <div className="flex flex-col w-full gap-5">
        <div className="h-32 w-full animate-pulse bg-[#161616] rounded-lg"></div>
        <div className="h-32 w-full animate-pulse bg-[#161616] rounded-lg"></div>
        <div className="h-32 w-full animate-pulse bg-[#161616] rounded-lg"></div>
        <div className="h-32 w-full animate-pulse bg-[#161616] rounded-lg"></div>
        <div className="h-32 w-full animate-pulse bg-[#161616] rounded-lg"></div>
        <div className="h-32 w-full animate-pulse bg-[#161616] rounded-lg"></div>
        </div>
      </main>
    }
  
    
    if (status === 'unauthenticated') {
      router.push('/login')
      return null
    }
  return (
    <main>
        <Header/>
        <div>
      {" "}
      <SideBar />
   
      
      <div className={`lg:w-full lg:mt-24 sm:mt-0 lg:pl-[25rem] lg:pr-[25rem] sm:pr-0 sm:pl-0  ${currentTab !== 'feed' && pathname != "/" && ' mt-0' }`}>   <MobileNavBar/> {children}</div>
      <RightSideBar />
    </div>
    </main>
  );
};

export default RootLayout;
