
import { Heading } from "@/components/heading";
import { PlaceHolder } from "@/components/placeholder";
import { Spinner } from "@/components/spinner";
import { CardCompact } from "@/features/ticket/components/cardCompact";
import TicketCreateForm from "@/features/ticket/components/ticketCreateForm";
import { TicketList } from "@/features/ticket/components/ticketList";
import TicketUpsertForm from "@/features/ticket/components/ticketUpsertForm";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const TicketsPage = async() => {
    return (
        <div className='flex flex-col flex-1 space-y-8'>
            <Heading title="Tickets" description="All Tickets at one place" />
            <CardCompact
                title = "Create Ticket"
                description = "New ticket will be created"
                content = {<TicketUpsertForm />}
                footer = {null}
                className= "w-full min-w-[420px] max-w-[575px] self-center"
            />
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