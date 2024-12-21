'use server'

import { auth } from "../../../auth"


export async function getProfile() {
    const session = await auth()
    return session?.user.image

}

export async function getUserId() {
    const session = await auth()
    return session?.user.id
}