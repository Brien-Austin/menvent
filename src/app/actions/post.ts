'use server'
import { prisma } from "@/lib/db"

export async function createPost(userId : string) {
  
   try {
    const post = await prisma.post.create({
      data : {
        userId : userId,
       
        postText : "Feeling so bored 🥲, anyone up for a chat ??? "
     
      }
    })

    console.log('[POST_CREATED]',post)
    
   } catch (error) {
    console.log('[POST_CREATION_ERROR]',error)
    
   }


  }