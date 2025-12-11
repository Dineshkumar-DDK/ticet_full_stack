'use client'
import { LucideKanban, LucideLogOut } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import * as Paths from "@/app/paths"
import { ThemeSwitcher } from "./theme/theme-switcher"
import SubmitButton from "./form/submitButton"
import { signOut } from "@/features/auth/actions/signOut"
import { getAuth } from "@/features/auth/actions/getAuth"
import { useState,useEffect } from "react";
import {User as AuthUser} from 'lucia'
const Header =  () => {
    const [fetchedUser,setFetchedUser] = useState<AuthUser|null>(null);
    useEffect(()=>{
        fetchUser();
        async function fetchUser(){
            const {user} = await getAuth();
            setFetchedUser(user)
        }
    },[])
    
    const navItems = <>
        {fetchedUser ?
            <>
                <Link href={Paths.ticketsPath()} className={buttonVariants({ variant: "default" })}><LucideKanban />Tickets</Link>
                <form action={signOut}>
                    <SubmitButton label="Sign out" icon={<LucideLogOut />} />
                </form>
            </>
            : <>
                <Link href={Paths.signIn()}
                    className={buttonVariants({ variant: 'default' })}
                >
                    Sign in
                </Link>
                <Link href={Paths.signUp()}
                    className={buttonVariants({ variant: 'outline' })}
                >
                    Sign up
                </Link>
            </>}

    </>
    return <nav
        className='
        flex justify-between
        py-2.5 px-5 w-full
        fixed top-0 left-0 right-0 z-20
        border-b bg-background/95 backdrop-blur
        supports-backdrop-blur:bg-background/60
        '>
        <div className="flex items-center space-x-2">

        </div>
        <div className="flex items-center space-x-2">
            <ThemeSwitcher />

            {navItems}
        </div>
    </nav>

}

export { Header }