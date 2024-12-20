"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { FcGoodDecision } from "react-icons/fc";

const Logo = () => {
    const pathname = usePathname()
    console.log(pathname)

  return (
    <h1 className={`w-fit dark:text-white text-2xl font-medium flex items-center gap-2  ${pathname !== "/" && "!w-[24rem]"}`}>
      <FcGoodDecision size={28} />
      Terovent
    </h1>
  );
};

export default Logo;
