'use server'
import { prisma } from "@/lib/db"
import { auth } from "../../../auth";

export async function createPost(userId: string,postText : string, isPublic : boolean) {
  try {
    const post = await prisma.post.create({
      data: {
        userId: userId,
        postText: postText,
        isAnonymous : !isPublic
      }
    });

    console.log('[POST_CREATED]', post);
  } catch (error) {
    console.log('[POST_CREATION_ERROR]', error);
  }
}

export async function getPosts() {
  const posts = await prisma.post.findMany({
    include: {
      user: true,
      likes: true,
      comments: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  
  


  return posts
  
}







export async function toggleLike(postId: string) {
    try {
      const currentUserId = await auth()
      const userId = currentUserId?.user.id
      console.log('Current user :',currentUserId?.user.id)
        console.log('PostId',postId, 'UserId', currentUserId?.user)
      console.log('Server action Triggered!!!')
  

      if(userId){
        const existingLike = await prisma.like.findUnique({
          where: {
            userId_postId: {
              userId,
              postId
            }
          }
        });

        if(existingLike){
          await prisma.like.delete({
            where : {
              userId_postId : {
                userId,postId
              }
            }
          })
        }

        if (!existingLike) {
          console.log('User has not liked this post yet. Proceeding with like creation.');
    
        
          const newLike = await prisma.like.create({
            data: {
              postId,
              userId
            }
          });
    
          if (newLike) {
            console.log('New like created:', newLike);
          } else {
            console.log('Failed to create like.');
          }
    
       
          const updatedPost = await prisma.post.update({
            where: { id: postId },
            data: { likeCount: { increment: 1 } }
          });
    
          // Logging the updated post's likeCount
          console.log('Post likeCount after increment:', updatedPost.likeCount);
    
        } else {
          console.log('User has already liked this post.');
        }
      }
  
      
  
    } catch (error) {
      console.error('Failed to Add like:', error);
    }
  }
  