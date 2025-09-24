'use server'

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import * as Path from '@/app/paths'
export const deleteTicket =async (id:string)=>{
    await prisma.ticket.delete({
        where:{
            id,
        }
    })
    redirect(Path.ticketsPath())
}