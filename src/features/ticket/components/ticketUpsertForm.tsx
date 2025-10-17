'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useTransition } from 'react'
import { Ticket } from '@prisma/client'
import { upsertTicket } from '../actions/upsertTicket'
import { LucideLoaderCircle } from 'lucide-react'

type TicketUpsertFormProps = {
    ticket?:Ticket
}
const TicketUpsertForm = ({ticket}:TicketUpsertFormProps) => {
  const [isPending,startTransition] =useTransition();
  const upsertTicketWithTransition=(formData:FormData)=>{
    startTransition(async()=>{
      await upsertTicket.bind(this,ticket?.id)(formData)
    })
  }
  return (
    <form action={upsertTicketWithTransition} className='flex flex-col space-y-2'>
        {/* <Input type='hidden' name='id' id='id' defaultValue={ticket.id} /> */}
        <Label htmlFor='title'>Title</Label>
        <Input type='text' id='title' name='title' defaultValue={ticket?.title} />
        <Label htmlFor='content'>Content</Label>
        <Textarea id='content' name='content' defaultValue={ticket?.content} />
        <Button disabled={isPending} type='submit'>
          {isPending && ( <LucideLoaderCircle className='mr-2 w=4 h-4 animate-spin'/>)}
          {ticket?.id ? "Update Ticket" : "Create Ticket "}</Button>    
    </form>
  )
}

export default TicketUpsertForm