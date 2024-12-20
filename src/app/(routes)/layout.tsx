"use client"
import React, { useEffect, useState } from "react";
import SideBar from "../components/layout/sidebar";
import RightSideBar from "../components/layout/right-sidebar";
import Header from "../components/layout/header";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

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
      return <div>Loading...</div>
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
      
      <div className={`w-full mt-24  pl-[25rem] pr-[25rem] ${currentTab !== 'feed' && pathname != "/" && ' mt-0' }`}> {children}</div>
      <RightSideBar />
    </div>
    </main>
  );
};

export default RootLayout;
