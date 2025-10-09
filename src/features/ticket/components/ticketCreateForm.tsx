import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const TicketCreateForm = () => {
  const createTicket = async(formData:FormData)=>{
    'use server'
    console.log(formData.get('title'))
  }
  return (
    <form action={createTicket} className='flex flex-col space-y-2'>
        <Label htmlFor='title'>Title</Label>
        <Input type='text' id='title' name='title' />
        <Label htmlFor='content'>Content</Label>
        <Textarea id='content' name='content'/>
        <Button type='submit'>Create Ticket</Button>    
    </form>
  )
}

export default TicketCreateForm