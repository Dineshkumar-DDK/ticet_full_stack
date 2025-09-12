'use client'

import { Heading } from "@/components/heading";
import { TicketItem } from "@/features/ticket/components/ticketItem";
import { Ticket } from "@/features/ticket/types";

const TicketPage = () => {

    const sampleTicket: Ticket[] = [{
        id: '1',
        title: 'Sample Ticket',
        content: 'This is a sample ticket content to demonstrate the TicketItem component.',
        status: 'OPEN'
    }];
    return (
        <div className='flex flex-col flex-1 space-y-8'>
            <Heading title="Tickets" description="All Tickets at one place" />
            <div className="flex flex-col flex-1 items-center animate-fade-in-from-top space-y-6">
                {sampleTicket.map((ticket) => <TicketItem key={ticket.id} ticket={ticket} />)}
            </div>
        </div>
    )
}

export default TicketPage;