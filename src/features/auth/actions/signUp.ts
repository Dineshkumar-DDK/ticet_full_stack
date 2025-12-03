'use server'


import { ActionState, formErrorToActionState, toActionState } from '@/components/form/utils/toActionState';
import { lucia } from '@/lib/lucia';
import { prisma } from '@/lib/prisma';
import { generateRandomToken } from '@/utils/crypto';
import { hash } from '@node-rs/argon2';
import { cookies } from 'next/headers';
//validation of formData ...
//2

import { z } from 'zod';
import { setSessionCookie } from '../utils/sessionCookie';
import { redirect } from 'next/navigation';
import { ticketsPath } from '@/app/paths';

const signUpSchema = z.object({
    username: z.string().min(1).max(191).refine((value) => !value.includes(" "), "User name must not contain empty characters"),
    email: z.email().min(1, { message: 'required' }).max(191),
    password: z.string().min(6, { message: "should be atleast 6 characters" }).max(191),
    confirmPassword: z.string().min(6, { message: "should be atleast 6 characters" }).max(191)

}).superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
        ctx.addIssue(
            {
                code: 'custom',
                message: 'password not matching',
                path: ["confirmPassword"]
            }
        )
    }
})

//1
export const signUp = async (_actionState: ActionState, formData: FormData) => {
    console.log("signup here...",formData)
    try {
        const { username, email, password } = signUpSchema.parse(
            Object.fromEntries(formData)
        )
        const passwordHash = await hash(password, {
            memoryCost: 19456,
            timeCost: 2,
            outputLen: 32,
            parallelism: 1,
        });

        const user = await prisma.user.create({
            data: {
                username,
                email,
                passwordHash
            }
        });
        console.log(user,"checing the user exists..")
        const sessionToken = generateRandomToken();
        const session = await lucia.createSession(sessionToken, user.id);
        await setSessionCookie(sessionToken, session.expiresAt);
        
    } catch (error) {
        return formErrorToActionState(error, formData);
    }
    redirect(ticketsPath());
    return toActionState("SUCCESS", "sign up successful",formData)
}