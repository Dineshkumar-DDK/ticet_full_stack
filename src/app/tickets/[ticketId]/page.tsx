import { PlaceHolder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as Path from "@/app/paths";

type TicketPageProps ={
   params:{ ticketId: string };
}

const ticketPage = ({params}:TicketPageProps)=>{
    if(!params.ticketId){
        return <PlaceHolder title="No Ticket Found" button= {
            <Button variant = 'outline' asChild>
                <Link href={Path.ticketsPath()}>Back to Tickets</Link>
            </Button>

        } />;
    } 

    return (
    <div>
        <h1>Ticket {params.ticketId}</h1>
    </div>
    );

}

export default ticketPage;