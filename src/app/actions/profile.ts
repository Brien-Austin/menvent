'use server'

import { auth } from "../../../auth"


export async function getProfile() {
    const session = await auth()
    return session?.user.image

}