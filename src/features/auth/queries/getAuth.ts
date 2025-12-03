import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";
import {cache} from 'react'

const getAuth = cache (async ()=>{
    //1 - get session if exists
    const cookieStore = await cookies();
    const sessionId = cookieStore.get(lucia.sessionCookieName)?.value ?? null;

    if(!sessionId){
        return {
            user:null,
            session:null
        }
    }

    //2 - validate the session 
    const result = await lucia.validateSession(sessionId) 
    try {
      if(result.session && result.session.fresh)  {
        const sessionCookie = lucia.createSessionCookie(result.session.id);
        cookieStore.set(
            sessionStorage.name,
            sessionCookie.value,
            sessionCookie.attributes
        )
      }
      if(!result.session){
        const sessionCookie = lucia.createBlankSessionCookie();
        cookieStore.set(
            sessionStorage.name,
            sessionCookie.value,
            sessionCookie.attributes
        )
      }
    } catch {
       // Do nothing when used in RSC 
    }
    return result
})