"use client"
import { useSideBarRoutes } from "@/app/hooks/useSideBarRoutes";

import Image from "next/image";

import React from "react";
import SideBarItems from "./sidebar-items";
import { useSession } from "next-auth/react";

const SideBar = () => {
  const { routes } = useSideBarRoutes();
  const {data:session} = useSession()
  console.log(session)
  return (
    <aside className="h-screen fixed top-24 left-0 flex-shrink-0 w-[24rem] border-r p-8 flex flex-col  ">
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
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full ring-2 ring-white relative overflow-hidden">
            {
              session?.user.image && <Image
              src={session?.user.image}
              fill
              alt="profile"
              className="object-cover"
            />
            }
          </div>
          <h1>Brien</h1>
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
