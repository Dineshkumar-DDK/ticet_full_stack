'use server'

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import * as Path from '@/app/paths'
import { revalidatePath } from "next/cache"
import { deleteCookieByKey } from "@/action/cookieUtils"
export const deleteTicket =async (id:string)=>{
    await prisma.ticket.delete({
        where:{
            id,
        }
    })
    deleteCookieByKey('toast')
    revalidatePath(Path.ticketsPath())
    redirect(Path.ticketsPath())
}