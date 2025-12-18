'use server'
import { setCookieByKey } from '@/action/cookieUtils'
import * as Paths from '@/app/paths'
import { ActionState, formErrorToActionState, toActionState } from '@/components/form/utils/toActionState'
import { getAuth } from '@/features/auth/actions/getAuth'
import { prisma } from '@/lib/prisma'
import { toPaise } from '@/utils/currency'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
const upsertSchema = z.object(
    { 
        title: z.string().min(1).max(191), 
        content: z.string().min(3).max(1024),
        deadline:z.string().regex(/^\d{4}-\d{2}-\d{2}$/,"Is required"),
        bounty:z.coerce.number().positive(),
     }
);

export const upsertTicket = async (id: string | undefined, _actionState: ActionState, formData: FormData) => {
    try {

        const {user} = await getAuth();

        if(!user){
            redirect(Paths.signIn());
        }

        const data = upsertSchema.parse({
            // id:formData.get('id') as string,
            title: formData.get('title'),
            content: formData.get('content'),
            deadline: formData.get('deadline'),
            bounty: formData.get('bounty'),
        })

    
        const dbData = {
            ...data,
            userId:user.id,
            bounty:toPaise(data.bounty)
        }
        await prisma.ticket.upsert({
            where: {
                id: id || ""
            },
            update: dbData,
            create: dbData
        })
    }
    catch (error) {
        return formErrorToActionState(error, formData);
    }

    await setCookieByKey('toast', "Ticket Updated Successfully")
    revalidatePath(Paths.ticketsPath());
    if (id) redirect(Paths.ticketsPath());

    return toActionState('SUCCESS', 'Ticket created successfully')
}