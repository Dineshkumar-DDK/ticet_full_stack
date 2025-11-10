import { Ticket } from "@prisma/client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LucideTrash } from "lucide-react"
type ticketMoreMenuProps = {
    ticket: Ticket,
    trigger: React.ReactNode
}
const TicketMoreMenu = ({ ticket, trigger }: ticketMoreMenuProps) => {

    const deleteMenuItem = <DropdownMenuItem>
        <LucideTrash className="mr-2 h-4 w-4" />
        <span>Delete</span>
    </DropdownMenuItem>
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {trigger}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" side="right">



                {deleteMenuItem}


                {/* <DropdownMenuSeparator /> */}

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default TicketMoreMenu