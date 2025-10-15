const homePath = ()=>'/';
const ticketsPath = ()=>'/tickets';
const ticketPath = (id: string | number) => `/tickets/${id}`;
const editTicketPath = (id: string | number) => `/tickets/${id}/edit`;

export {homePath, ticketsPath, ticketPath, editTicketPath};
