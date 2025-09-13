import { PlaceHolder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as Path from "@/app/paths";
import { Ticket } from "@/features/ticket/types";
import { TicketItem } from "@/features/ticket/components/ticketItem";

type TicketPageProps = {
    params: { ticketId: string };
}

const sampleTicket: Ticket[] = [{
    id: '1',
    title: 'Sample Ticket',
    content: 'This is a sample ticket content to demonstrate the TicketItem component.',
    status: 'OPEN'
}];

const ticketPage = ({ params }: TicketPageProps) => {
    const avlticket = sampleTicket.find(item=>item.id==params.ticketId)
    if (!avlticket) {
        return <PlaceHolder title="No Ticket Found" button={
            <Button variant='outline' asChild>
                <Link href={Path.ticketsPath()}>Back to Tickets</Link>
            </Button>

        } />;
    }

    return (
        <div className='flex justify-center animate-fade-in-from-top'>
            <TicketItem key={avlticket.id} ticket={avlticket} isDetail />
        </div>
    );

}

export default ticketPage;