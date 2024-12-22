"use client"
import { useSideBarRoutes } from "@/app/hooks/useSideBarRoutes";

import Image from "next/image";

import React from "react";
import SideBarItems from "./sidebar-items";
import { signOut, useSession } from "next-auth/react";
import { LogOut } from "lucide-react";

const SideBar = () => {
  const { routes } = useSideBarRoutes();
  const {data:session} = useSession()
  console.log(session)
  return (
    <aside className="lg:h-screen lg:fixed lg:top-24 lg:left-0 lg:flex-shrink-0 lg:w-[24rem] lg:border-r lg:p-8 lg:flex lg:flex-col  sm:hidden">
      <section>
        {" "}
        {routes.map((r, i) => (
          <SideBarItems
            key={i}
            route={r.route}
            label={r.label}
            icon={r.icon}
            slug={r.slug}
          />
        ))}
      </section>

      <hr className="mt-6 border-neutral-600" />
      <section className="fixed left-5 bottom-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full ring-2 ring-white relative overflow-hidden">
            {
              session?.user.image && <Image
              src={session?.user.image}
              fill
              alt="profile"
              className="object-cover"
            />
            }
          </div>
          <div className="flex flex-col gap-1">
          <h1>Brien</h1>
          <button onClick={()=>signOut()} className=" border  px-2 py-1 rounded-lg text-xs flex items-center gap-2"><LogOut size={12}/>Logout</button>
          </div>
          
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
