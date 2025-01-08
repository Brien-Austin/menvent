'use server'

import { auth } from "../../../auth"


export async function getProfile():Promise<string|null> {
   try {
    const session = await auth()
    return session?.user.image ?? null
    
   } catch (error) {
    console.log('[PROFILE_FETCH_ERROR]',error)
    return null
    
   }

}

export async function getUserId() {
    const session = await auth()
    return session?.user.id
}