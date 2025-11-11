'use server';
import { ticketPath } from "@/app/paths"
import { formErrorToActionState, toActionState } from "@/components/form/utils/toActionState"
import { prisma } from "@/lib/prisma"
import { TicketStatus } from "@prisma/client"
import { revalidatePath } from 'next/cache'

export const updateTicket = async (id: string, status: TicketStatus) => {
    try {
        await prisma.ticket.update({
            where: {
                id,
            },
            data: {
                status
            }
        })
    } catch (err) {
        return formErrorToActionState(err)
    }
    revalidatePath(ticketPath(id))
    return toActionState("SUCCESS","Status updated")
}


