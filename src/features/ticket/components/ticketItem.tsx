
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import * as Paths from "@/app/paths";
import { TICKET_ICONS } from "../constants";
import { Button } from "@/components/ui/button";
import { LucideMoreVertical, LucidePencil, LucideSquareArrowOutUpRight, LucideTrash } from "lucide-react";
import clsx from "clsx";
import { Ticket } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { deleteTicket } from "../actions/deleteTicket";
import { toRupeeFromPaise } from "@/utils/currency";
import TicketMoreMenu from "./ticketMoreMenu";

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

    const editButton = (
        <Button variant='outline' size='icon' asChild>
            <Link href={Paths.editTicketPath(ticket.id)} className="underline">
                <LucidePencil className="h-4 w-4" />
            </Link>
        </Button>
    )

    const moreMenu = <TicketMoreMenu
        ticket={ticket}
        trigger={
            <Button variant='outline' size='icon'>
                <LucideMoreVertical className="h-4 w-4" />
            </Button >
        }
    />

    return (
        <div className={clsx('flex space-x-1 w-full', { 'max-w-[420px]': !isDetail, 'max-w-[580px]': !isDetail })}>
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
                    <div className='flex justify-between space-x-8 text-sm'>
                        <span>Deadline: {ticket.deadline}</span>
                        <span>Bounty: {toRupeeFromPaise(ticket.bounty)}</span>
                    </div>
                </CardFooter>
            </Card>
            <div className="flex flex-col space-y-1">
                {isDetail ?
                    <>
                        {editButton}
                        {moreMenu}
                    </> :
                    <>
                        {detailButton}
                        {editButton}
                    </>
                }
            </div>

        </div>
    )
}

export { TicketItem };