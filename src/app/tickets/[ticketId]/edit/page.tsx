import { CardCompact } from '@/features/ticket/components/cardCompact'
import React from 'react'
import { TicketPageProps } from '../../[ticketId]/page'
import {notFound} from 'next/navigation';
import { getTicket } from '@/features/ticket/queries/get-ticket';

const EditPage = async({params}:TicketPageProps) => {
  const id = await params?.ticketId;
  const ticket = await getTicket(id);
  console.log(ticket);
  if(!ticket){
    notFound();
  }
  return (
    <div className = "flex flex-col flex-1 justify-center items-center">
        <CardCompact 
         title = "Edit Ticket"
         description="Edit your ticket details"
         content = {<>Edit ticket</>}
         className="w-full max-w-[420px] animate-fade-in-from-top"
         footer={null}
        />
    </div>
  )
}

export default EditPage