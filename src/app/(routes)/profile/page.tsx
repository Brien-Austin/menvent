"use client";

import { getProfile } from "@/app/actions/profile";
import Back from "@/app/components/layout/back";
import Hero from "@/app/components/layout/hero";
import { useQuery } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";



const Profile = () => {
  const { data: profile } = useQuery<string | null>({
    queryKey: ["get-profile"],
    queryFn: getProfile
  });

  console.log(profile)
 

  return (
    <main className="p-8 w-full flex-1 ">
      <Hero text="Profile" />
      <Back />
      <div
        onClick={() => signOut()}
        className="mt-6 border w-full h-16 shadow-md rounded-lg flex p-3 items-center  gap-3 cursor-pointer"
      >
        <LogOut />
        <h1>Logout</h1>
      </div>
    </main>
  );
};

export default Profile;
