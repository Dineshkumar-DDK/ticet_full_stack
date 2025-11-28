'use server'


import { ActionState, formErrorToActionState, toActionState } from '@/components/form/utils/toActionState';
//validation of formData ...
//2

import { z } from 'zod';

const signUpSchema = z.object({
    userName: z.string().min(1).max(191).refine((value) => !value.includes(" "), "User name must not contain empty characters"),
    email: z.email().min(1, { message: 'required' }).max(191),
    password: z.string().min(6,{message:"should be atleast 6 characters"}).max(191),
    confirmPassword: z.string().min(6,{message:"should be atleast 6 characters"}).max(191)

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
export const signUp = async (_actionState:ActionState,formData: FormData) => {
    try {
        const { userName, email, password } = signUpSchema.parse(
            Object.fromEntries(formData)
        )
        // todo  store in db
    } catch (error) {
       return formErrorToActionState(error,formData);
    }
    return toActionState("SUCCESS","sign up successful")
}