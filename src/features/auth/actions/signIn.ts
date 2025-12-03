'use server';
import { ticketsPath } from "@/app/paths";
import { formErrorToActionState, ActionState, toActionState } from "@/components/form/utils/toActionState"
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { verify } from "@node-rs/argon2";
import z from 'zod'
import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";
//2
const signInSchema = z.object({
    email: z.email().min(1, { message: "Required" }).max(191, { message: "should be a proper email format" }),
    password: z.string().min(6, { message: "Required" }).max(191)
})

// 1
export const signIn = async (_actionState: ActionState, formData: FormData) => {
    try {
        const { email, password } = signInSchema.parse(
            Object.fromEntries(formData)
        );
        const user = await prisma.user.findUnique({
            where: { email }
        })
        if (!user) {
            return toActionState("ERROR", "Incorrect email or password",formData);
        }
        const validPassword = await verify(user.passwordHash, password);
        if (!validPassword) {
            return toActionState("ERROR", "Incorrect email or password",formData);
        }
        const session = await lucia.createSession(user.id, {});
        const cookieSession = lucia.createSessionCookie(session.id);

        const cookieStore = await cookies();
        cookieStore?.set(
            cookieSession.name,
            cookieSession.value,
            cookieSession.attributes
        )
    } catch (error) {
        return formErrorToActionState(error,formData)
    }

    redirect(ticketsPath())
}