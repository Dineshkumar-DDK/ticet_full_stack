'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useActionState } from 'react'
import { Ticket } from '@prisma/client'
import { upsertTicket } from '../actions/upsertTicket'
import SubmitButton from '@/components/form/submitButton'
import { EMPTY_ACTION_STATE } from '@/components/form/utils/toActionState'
import FieldError from '@/components/form/fieldError'

type TicketUpsertFormProps = {
  ticket?: Ticket
}
const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [actionState, action] = useActionState(upsertTicket.bind(this, ticket?.id), EMPTY_ACTION_STATE)
  return (
    <form action={action} className='flex flex-col space-y-2'>
      {/* <Input type='hidden' name='id' id='id' defaultValue={ticket.id} /> */}
      <Label htmlFor='title'>Title</Label>
      <Input type='text' id='title' name='title' defaultValue={actionState.payload?.get('title') as string ?? ticket?.title} />
      <FieldError actionState={actionState} name='title' />
      <Label htmlFor='content'>Content</Label>
      <Textarea id='content' name='content' defaultValue={actionState.payload?.get('content') as string ?? ticket?.content} />
      <FieldError actionState={actionState} name='content' />
      <SubmitButton label={ticket?.id ? "Update Ticket" : "Create Ticket "} />
      {actionState.message}
    </form>
  )
}

export default TicketUpsertForm