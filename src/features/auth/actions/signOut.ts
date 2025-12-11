'use server';
import { lucia } from "@/lib/lucia"
import { redirect } from "next/navigation"
import * as path from '@/app/paths'
import { cookies } from "next/headers"
import { getAuth } from "./getAuth"


export const signOut = async () => {
    
    const {session} = await getAuth();
    if(!session){
        redirect(path.signIn())
    }

    await lucia.invalidateSession(session.id);
    const sessionCookie = lucia.createBlankSessionCookie()
    const cookieStore = await cookies();
    cookieStore.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    )
    redirect(path.signIn())
}