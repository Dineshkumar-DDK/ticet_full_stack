'use client';
import { Ticket, TicketStatus } from "@prisma/client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LucideTrash } from "lucide-react"
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu"
import { TICKET_STATUS_LABELS } from "../constants"
import { updateTicket } from "../actions/updateTicket"
import { toast } from "sonner";
import { deleteTicket } from "../actions/deleteTicket";
import {useConfirmationDialogue} from "./confirmationDialog";
type ticketMoreMenuProps = {
    ticket: Ticket,
    trigger: React.ReactNode
}
const TicketMoreMenu = ({ ticket, trigger }: ticketMoreMenuProps) => {

    const [deleteButton, deleteDialogue] = useConfirmationDialogue({
        trigger: <DropdownMenuItem > <LucideTrash className='mr-2 h-4 w-4' /> <span>Delete</span> </DropdownMenuItem>,
        action: deleteTicket.bind(null, ticket.id)
    })
    
    console.log(deleteButton,deleteDialogue,"check...")


const handleUpdateTicketStatus = async (value: string) => {
    const promise = updateTicket(ticket.id, value as TicketStatus);
    toast.promise(promise, {
        loading: "updating status...."
    })
    const result = await promise;
    if (result.status == "ERROR") {
        toast.error(result?.message);
    }
    else {
        toast.success(result?.message);
    }
}

const ticketStatusRadioGroupItems = <DropdownMenuRadioGroup value={ticket?.status}
    onValueChange={handleUpdateTicketStatus}
>
    {
        (Object.keys(TICKET_STATUS_LABELS) as Array<TicketStatus>)?.map((item) => (
            <DropdownMenuRadioItem value={item} key={item}>{TICKET_STATUS_LABELS[item]}</DropdownMenuRadioItem>

        ))
    }
</DropdownMenuRadioGroup>
return (
    <>
    {deleteDialogue}
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            {trigger}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" side="right">
            {ticketStatusRadioGroupItems}
            <DropdownMenuSeparator />
            {deleteButton}
        </DropdownMenuContent>
    </DropdownMenu>
    </>
)
}

export default TicketMoreMenu