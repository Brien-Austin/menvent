'use server'
import { prisma } from "@/lib/db"

export async function createPost() {
  
   try {
    const post = await prisma.post.create({
      data : {
        title : "Brien",
        content : "Hello World",
        published : true
      }
    })

    console.log('[POST_CREATED]',post)
    
   } catch (error) {
    console.log('[POST_CREATION_ERROR]',error)
    
   }


  }