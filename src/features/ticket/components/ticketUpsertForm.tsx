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
import Form from '@/components/form/form'
import { toRupeeFromPaise } from '@/utils/currency'
import { DatePicker } from './datePicker'

type TicketUpsertFormProps = {
  ticket?: Ticket
}
const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [actionState, action] = useActionState(upsertTicket.bind(this, ticket?.id), EMPTY_ACTION_STATE)

  return (
    <Form action={action} actionState={actionState} >
      {/* <Input type='hidden' name='id' id='id' defaultValue={ticket.id} /> */}
      <Label htmlFor='title'>Title</Label>
      <Input type='text' id='title' name='title' defaultValue={actionState.payload?.get('title') as string ?? ticket?.title} />
      <FieldError actionState={actionState} name='title' />
      <Label htmlFor='content'>Content</Label>
      <Textarea id='content' name='content' defaultValue={actionState.payload?.get('content') as string ?? ticket?.content} />
      <FieldError actionState={actionState} name='content' />
      <div className="flex gap-x-2 space-y-2 mb-1">
        <div className='w-1/2 flex flex-col space-y-2'>
          <Label htmlFor='deadline'>Deadline</Label>
          <DatePicker
            key={actionState?.timestamp}
            id='deadline'
            name='deadline'
            defaultValue={(actionState.payload?.get("deadline") as string) ?? ticket?.deadline}
          />
          <FieldError actionState={actionState} name='deadline' />
        </div>
        <div className='w-1/2 flex flex-col space-y-2'>
          <Label htmlFor="bounty">Bounty</Label>
          <Input
            type="number"
            id="bounty"
            name="bounty"
            defaultValue={(actionState.payload?.get('bounty') as string) ?? (ticket?.bounty ? toRupeeFromPaise(ticket?.bounty) : "")}
          />
          <FieldError actionState={actionState} name='bounty' />
        </div>
      </div>
      <SubmitButton label={ticket?.id ? "Update Ticket" : "Create Ticket "} />
    </Form>
  )
}

export default TicketUpsertForm