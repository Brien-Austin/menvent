"use client";

import { getProfile } from "@/app/actions/profile";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProfileComponent = () => {
  const [profile, setProfile] = useState<string | null>();

  async function fetchProfile() {
    const profile = await getProfile();
    setProfile(profile);
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Link href={"/profile"} className="relative h-8 w-8 rounded-full">
      {profile ? (
        <Image
          src={profile!}
          alt="profile"
          fill
          className="rounded-full object-cover"
        />
      ) : (
        <div className="bg-slate-200 h-8 w-8  rounded-full animate-pulse"></div>
      )}
    </Link>
  );
};

export default ProfileComponent;
