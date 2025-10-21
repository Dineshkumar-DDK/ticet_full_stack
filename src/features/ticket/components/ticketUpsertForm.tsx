'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useActionState } from 'react'
import { Ticket } from '@prisma/client'
import { upsertTicket } from '../actions/upsertTicket'
import SubmitButton from '@/components/form/submitButton'
import { EMPTY_ACTION_STATE } from '@/components/form/utils/toActionState'

type TicketUpsertFormProps = {
    ticket?:Ticket
}
const TicketUpsertForm = ({ticket}:TicketUpsertFormProps) => {
  const [actionState,action]=useActionState(upsertTicket.bind(this,ticket?.id),EMPTY_ACTION_STATE)
  return (
    <form action={action} className='flex flex-col space-y-2'>
        {/* <Input type='hidden' name='id' id='id' defaultValue={ticket.id} /> */}
        <Label htmlFor='title'>Title</Label>
        <Input type='text' id='title' name='title' defaultValue={actionState.payload?.get('title') as string?? ticket?.title} />
        <span className='text-xs text-red-500'>{actionState?.fieldErrors?.title?.errors[0]}</span>
        <Label htmlFor='content'>Content</Label>
        <Textarea id='content' name='content' defaultValue={actionState.payload?.get('content') as string ?? ticket?.content} />
        <span className='text-xs text-red-500'>{actionState?.fieldErrors?.content?.errors[0]}</span>
        <SubmitButton label = {ticket?.id ? "Update Ticket" : "Create Ticket "} />  
        {actionState.message}
    </form>
  )
}

export default TicketUpsertForm