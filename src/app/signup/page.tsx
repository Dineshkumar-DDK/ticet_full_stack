import { CardCompact } from '@/features/ticket/components/cardCompact'
import React from 'react'

const signUpPage = async() => {
 
  return (
    <div className = "flex flex-col flex-1 justify-center items-center">
        <CardCompact 
         title = "Edit Ticket"
         description="Edit your ticket details"
         content = {"signup"}
         className="w-full max-w-[420px] animate-fade-in-from-top"
         footer={null}
        />
    </div>
  )
}

export default signUpPage