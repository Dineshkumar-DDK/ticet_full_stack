'use server'
import * as Paths from '@/app/paths'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
export const updateTicket = async (formData:FormData)=>{
    const data = {
        id:formData.get('id') as string,
        title : formData.get('title') as string,
        content:formData.get('content') as string
    }

    await prisma.ticket.update({
        where:{
            id:data?.id 
        },
        data:{
            title:data?.title,
            content:data?.content
        }
    })

    revalidatePath(Paths.ticketsPath());
    redirect(Paths.ticketsPath());
}