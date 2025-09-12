import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import * as Paths from "@/app/paths";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";

type TicketItemProps ={
    ticket :Ticket
}

const TicketItem = ({ ticket }:TicketItemProps) => {
    return (
        <Card className='w-full max-w-[420px]'>
            <CardHeader>
                <CardTitle className="flex gap-x-2">
                    <span>{TICKET_ICONS[ticket.status]}</span>
                    <span className='truncate'>{ticket.title}</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <span className="whitespace-break-spaces line-clamp-3">
                    {ticket.content}
                </span>
            </CardContent>
            <CardFooter>
                <Link href={Paths.ticketPath(ticket.id)} className='underline'>
                    View Ticket
                </Link>
            </CardFooter>
        </Card>
    )
}

export { TicketItem };