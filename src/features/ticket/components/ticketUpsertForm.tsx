import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { Ticket } from '@prisma/client'
import { upsertTicket } from '../actions/upsertTicket'

type TicketUpsertFormProps = {
    ticket?:Ticket
}
const TicketUpsertForm = ({ticket}:TicketUpsertFormProps) => {
  return (
    <form action={upsertTicket.bind(this,ticket?.id)} className='flex flex-col space-y-2'>
        {/* <Input type='hidden' name='id' id='id' defaultValue={ticket.id} /> */}
        <Label htmlFor='title'>Title</Label>
        <Input type='text' id='title' name='title' defaultValue={ticket?.title} />
        <Label htmlFor='content'>Content</Label>
        <Textarea id='content' name='content' defaultValue={ticket?.content} />
        <Button type='submit'>{ticket?.id ? "Update Ticket" : "Create Ticket "}</Button>    
    </form>
  )
}

export default TicketUpsertForm