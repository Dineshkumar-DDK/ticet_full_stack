'use server'
import * as Paths from '@/app/paths'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
export const upsertTicket = async (id:string|undefined,formData:FormData)=>{
    const data = {
        // id:formData.get('id') as string,
        title : formData.get('title') as string,
        content:formData.get('content') as string
    }

    await prisma.ticket.upsert({
        where:{
            id:id || ""
        },
        update:data,
        create:data
    })

    revalidatePath(Paths.ticketsPath());
    if(id) redirect(Paths.ticketsPath());
}