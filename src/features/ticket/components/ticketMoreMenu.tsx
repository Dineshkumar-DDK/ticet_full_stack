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
type ticketMoreMenuProps = {
    ticket: Ticket,
    trigger: React.ReactNode
}
const TicketMoreMenu = ({ ticket, trigger }: ticketMoreMenuProps) => {

    const deleteMenuItem = <DropdownMenuItem>
        <LucideTrash className="mr-2 h-4 w-4" />
        <span>Delete</span>
    </DropdownMenuItem>

    const ticketStatusRadioGroupItems = <DropdownMenuRadioGroup value={ticket?.status}>
        {
            (Object.keys(TICKET_STATUS_LABELS) as Array<TicketStatus>)?.map((item) => (
                <DropdownMenuRadioItem value={item} key={item}>{TICKET_STATUS_LABELS[item]}</DropdownMenuRadioItem>

            ))
        }
    </DropdownMenuRadioGroup>
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {trigger}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" side="right">
                {ticketStatusRadioGroupItems}
                <DropdownMenuSeparator />
                {deleteMenuItem}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default TicketMoreMenu