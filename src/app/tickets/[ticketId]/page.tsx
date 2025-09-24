import { PlaceHolder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as Path from "@/app/paths";
import { TicketItem } from "@/features/ticket/components/ticketItem";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { Suspense } from "react";
import { Spinner } from "@/components/spinner";

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
            <Suspense fallback={<Spinner/>}>
                <TicketItem key={avlticket.id} ticket={avlticket} isDetail />
            </Suspense>
        </div>
    );

}

export default ticketPage;