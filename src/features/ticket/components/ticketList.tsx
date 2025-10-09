import { Heading } from "@/components/heading"
import { getTickets } from "../queries/get-tickets"
import { TicketItem } from "./ticketItem"

const TicketList = async() => {
    const sampleTicket = await getTickets()

    return (
    
        <div className="flex flex-col flex-1 items-center animate-fade-in-from-top space-y-6 w-full">
            {sampleTicket.map((ticket) => <TicketItem key={ticket.id} ticket={ticket} />)}
        </div>
   
    )
}
export { TicketList }