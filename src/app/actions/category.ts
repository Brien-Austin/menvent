'use server'

import { prisma } from "@/lib/db"

export async function getCategories() {
    try {
        const categories = await prisma.category.findMany({
            select : {
                name : true,
                emoji : true,
                id : true,
                description : true
            }
        })
        return categories
        
    } catch (error) {

        console.log('[FETCH_CATEGORY_ERROR]',error)
        
    }
}