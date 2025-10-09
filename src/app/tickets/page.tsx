
import { Heading } from "@/components/heading";
import { PlaceHolder } from "@/components/placeholder";
import { Spinner } from "@/components/spinner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TicketCreateForm from "@/features/ticket/components/ticketCreateForm";
import { TicketList } from "@/features/ticket/components/ticketList";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const TicketsPage = async() => {
    return (
        <div className='flex flex-col flex-1 space-y-8'>
            <Heading title="Tickets" description="All Tickets at one place" />
            <Card className='w-full min-w-[420px] max-w-[575px] self-center'>
                <CardHeader>
                    <CardTitle>Create Ticket</CardTitle>
                    <CardDescription>New ticket will be created</CardDescription>
                </CardHeader>
                <CardContent>
                    <TicketCreateForm />
                </CardContent>
            </Card>
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