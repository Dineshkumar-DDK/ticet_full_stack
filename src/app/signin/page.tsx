import { CardCompact } from '@/features/ticket/components/cardCompact'
import React from 'react'
import SignInForm from '@/features/auth/components/signInForm'
import Link from 'next/link'
import * as path from '../paths'

const signInPage = async () => {

    return (
        <div className="flex flex-col flex-1 justify-center items-center">
            <CardCompact
                title="Sign In"
                description="Sign in to your account"
                content={<SignInForm />}
                className="w-full max-w-[420px] animate-fade-in-from-top"
                footer={
                    <>
                        <Link href={path.signUp()}>
                            No Account yet ?
                        </Link>
                        <Link href={path.forgotPassword()}>
                            Forgot Password ?
                        </Link>
                    
                    </>
                    
                }
            />
        </div>
    )
}

export default signInPage