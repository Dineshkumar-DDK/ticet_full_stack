import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import * as Paths from "@/app/paths";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";
import { Button } from "@/components/ui/button";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import clsx from "clsx";

type TicketItemProps = {
    ticket: Ticket,
    isDetail?: boolean
}

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
    console.log(isDetail,"isDetails...")
    const detailButton = (
        <Button variant="outline" size="icon" asChild>
            <Link href={Paths.ticketPath(ticket.id)} className='underline'>
                <LucideSquareArrowOutUpRight />
            </Link>
        </Button>
    )
    return (
        <div className={clsx('flex space-x-1 w-full',{ 'max-w-[420px]':!isDetail , 'max-w-[580]':!isDetail})}>
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle className="flex gap-x-2">
                        <span>{TICKET_ICONS[ticket.status]}</span>
                        <span className='truncate'>{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <span className={clsx("whitespace-break-spaces ",{'line-clamp-3':!isDetail})}>
                        {ticket.content}
                    </span>
                </CardContent>
                <CardFooter>

                </CardFooter>
            </Card>
            { !isDetail && 
                <div className="flex flex-col space-y-1">
                    {detailButton}
                </div>
            }

        </div>
    )
}

export { TicketItem };