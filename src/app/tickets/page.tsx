
import { Heading } from "@/components/heading";
import { PlaceHolder } from "@/components/placeholder";
import { CardCompact } from "@/features/ticket/components/cardCompact";
import { TicketList } from "@/features/ticket/components/ticketList";
import TicketUpsertForm from "@/features/ticket/components/ticketUpsertForm";
import { ErrorBoundary } from "react-error-boundary";

const TicketsPage = async () => {
    return (
        <div className='flex flex-col flex-1 space-y-8'>
            <Heading title="Tickets" description="All Tickets at one place" />
            <CardCompact
                title="Create Ticket"
                description="New ticket will be created"
                content={<TicketUpsertForm />}
                footer={null}
                className="w-full min-w-[420px] max-w-[575px] self-center"
            />
            {/* <Suspense fallback={<Spinner />}> - the suspense is violating the progressive enhancement principle
             * as this creates spinner to appear when js disable and run in production mode
             * so commented it 
            */}
            <ErrorBoundary
                fallback={<PlaceHolder title="Error loading tickets" />}>
                <TicketList />
            </ErrorBoundary>
            {/* </Suspense> */}
        </div>
    )
}

export default TicketsPage;