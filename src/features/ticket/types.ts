export type TicketStatus = 'OPEN'|'CLOSED'|'IN_PROGRESS';

export type Ticket = {
    id:string;
    title:string;
    content:string;
    status:TicketStatus;
}