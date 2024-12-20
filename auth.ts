import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db";


export const {handlers,signIn,signOut,auth}  = NextAuth({
    secret : 'FU8XFlFMOR4girvJaoin9HoWAI7Uf+CDGaT4L0go8kU=',
   
    adapter : PrismaAdapter(prisma),
    providers : [GoogleProvider({
        clientId : process.env.GOOGLE_CLIENT_ID,
        clientSecret : process.env.GOOGLE_CLIENT_SECRET
    })]
})