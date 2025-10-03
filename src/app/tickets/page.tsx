
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticketList";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';
const TicketsPage = async() => {
    return (
        <div className='flex flex-col flex-1 space-y-8'>
            <Heading title="Tickets" description="All Tickets at one place" />
            <Suspense fallback={<Spinner />}>
                <TicketList />
            </Suspense>
        </div>
    )
}

export default TicketsPage;