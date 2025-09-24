
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticketList";
import { Suspense } from "react";

const TicketsPage = () => {
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