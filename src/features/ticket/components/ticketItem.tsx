'use client'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import * as Paths from "@/app/paths";
import { TICKET_ICONS } from "../constants";
import { Button } from "@/components/ui/button";
import { LucideSquareArrowOutUpRight, LucideTrash } from "lucide-react";
import clsx from "clsx";
import { Ticket } from "@prisma/client";

type TicketItemProps = {
    ticket: Ticket,
    isDetail?: boolean
}

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
    const detailButton = (
        <Button variant="outline" size="icon" asChild>
            <Link href={Paths.ticketPath(ticket.id)} className='underline'>
                <LucideSquareArrowOutUpRight className="h-4 w-4" />
            </Link>
        </Button>
    )

    function handleDelete(){
        console.log("hi..")
    }
    const deleteButton = (
        <Button variant="outline" size="icon" onClick={handleDelete}>
            <LucideTrash className="h-4 w-4" />
        </Button>
    )

    return (
        <div className={clsx('flex space-x-1 w-full', { 'max-w-[420px]': !isDetail, 'max-w-[580]': !isDetail })}>
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle className="flex gap-x-2">
                        <span>{TICKET_ICONS[ticket.status]}</span>
                        <span className='truncate'>{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <span className={clsx("whitespace-break-spaces ", { 'line-clamp-3': !isDetail })}>
                        {ticket.content}
                    </span>
                </CardContent>
                <CardFooter>

                </CardFooter>
            </Card>
            <div className="flex flex-col space-y-1">
                {isDetail ? deleteButton : detailButton}
            </div>

        </div>
    )
}

export { TicketItem };