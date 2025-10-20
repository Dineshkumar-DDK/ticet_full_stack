'use server'
import * as Paths from '@/app/paths'
import { ActionState, formErrorToActionState } from '@/components/form/utils/toActionState'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
const upsertSchema = z.object({ title: z.string().min(1).max(191), content: z.string().min(3).max(1024) });
export const upsertTicket = async (id: string | undefined, _actionState: ActionState, formData: FormData) => {
    try {
        const data = upsertSchema.parse({
            // id:formData.get('id') as string,
            title: formData.get('title'),
            content: formData.get('content')
        })
        await prisma.ticket.upsert({
            where: {
                id: id || "" 
            },
            update: data,
            create: data
        })
    }
    catch (error) {
        return formErrorToActionState(error,formData);
    }


    revalidatePath(Paths.ticketsPath());
    if (id) redirect(Paths.ticketsPath());

    return { message: "successful",fieldErrors:{} }
}