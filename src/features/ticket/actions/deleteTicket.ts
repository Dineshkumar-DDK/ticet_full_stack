'use server'

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import * as Path from '@/app/paths'
import { revalidatePath } from "next/cache"
import { deleteCookieByKey, setCookieByKey } from "@/action/cookieUtils"
export const deleteTicket =async (id:string)=>{
    await prisma.ticket.delete({
        where:{
            id,
        }
    })
   
    revalidatePath(Path.ticketsPath())
    await setCookieByKey('toast', "Ticket Deleted Successfully")
    redirect(Path.ticketsPath())
}