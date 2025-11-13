'use server'

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import * as Path from '@/app/paths'
import { revalidatePath } from "next/cache"
import { deleteCookieByKey, setCookieByKey } from "@/action/cookieUtils"
import { formErrorToActionState } from "@/components/form/utils/toActionState"
export const deleteTicket = async (id: string) => {
    try {
        await prisma.ticket.delete({
            where: {
                id,
            }
        })
    } catch (err) {
        return formErrorToActionState(err)
    }

    revalidatePath(Path.ticketsPath())
    await setCookieByKey('toast', "Ticket Deleted Successfully")
    redirect(Path.ticketsPath())
}