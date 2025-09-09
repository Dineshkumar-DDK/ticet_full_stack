const homePath = ()=>'/';
const ticketsPath = ()=>'/tickets';
const ticketPath = (id: string | number) => `/tickets/${id}`;

export {homePath, ticketsPath, ticketPath};
