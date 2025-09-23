import { PlaceHolder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as Path from "@/app/paths";
import { TicketItem } from "@/features/ticket/components/ticketItem";
import { getTicket } from "@/features/ticket/queries/get-ticket";

type TicketPageProps = {
    params: { ticketId: string };
}



const ticketPage = async ({ params }: TicketPageProps) => {
    const avlticket = await getTicket(params.ticketId)
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