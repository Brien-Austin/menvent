import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db";


export const {handlers,signIn,signOut,auth}  = NextAuth({
    secret : 'FU8XFlFMOR4girvJaoin9HoWAI7Uf+CDGaT4L0go8kU=',
   
    adapter : PrismaAdapter(prisma),
    providers : [Google]
})