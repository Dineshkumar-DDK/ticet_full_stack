
import { Heading } from "@/components/heading";
import { PlaceHolder } from "@/components/placeholder";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticketList";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const TicketsPage = async() => {
    return (
        <div className='flex flex-col flex-1 space-y-8'>
            <Heading title="Tickets" description="All Tickets at one place" />
            <Suspense fallback={<Spinner />}>
            <ErrorBoundary
            fallback={<PlaceHolder title="Error loading tickets" />}>
                <TicketList />
            </ErrorBoundary>
            </Suspense>
        </div>
    )
}

export default TicketsPage;