import { CardCompact } from '@/features/ticket/components/cardCompact'
import Link from 'next/link'
import React from 'react'
import * as path from '@/app/paths'
import SignUpForm from '@/features/auth/components/signUpForm'

const signUpPage = async() => {
 
  return (
    <div className = "flex flex-col flex-1 justify-center items-center">
        <CardCompact 
         title = "Sign up"
         description="Create an account to get started"
         content = {<SignUpForm/>}
         className="w-full max-w-[420px] animate-fade-in-from-top"
         footer={
          <Link href={path.signIn()}>
            Have an accout? Sign In here
          </Link> 
         }
        />
    </div>
  )
}

export default signUpPage