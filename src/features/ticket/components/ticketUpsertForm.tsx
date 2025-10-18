'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useActionState } from 'react'
import { Ticket } from '@prisma/client'
import { upsertTicket } from '../actions/upsertTicket'
import SubmitButton from '@/components/submitButton'

type TicketUpsertFormProps = {
    ticket?:Ticket
}
const TicketUpsertForm = ({ticket}:TicketUpsertFormProps) => {
  const [actionState,action]=useActionState(upsertTicket.bind(this,ticket?.id),{message:""})
  return (
    <form action={action} className='flex flex-col space-y-2'>
        {/* <Input type='hidden' name='id' id='id' defaultValue={ticket.id} /> */}
        <Label htmlFor='title'>Title</Label>
        <Input type='text' id='title' name='title' defaultValue={ticket?.title} />
        <Label htmlFor='content'>Content</Label>
        <Textarea id='content' name='content' defaultValue={ticket?.content} />
        <SubmitButton label = {ticket?.id ? "Update Ticket" : "Create Ticket "} />  
        {actionState.message}
    </form>
  )
}

export default TicketUpsertForm