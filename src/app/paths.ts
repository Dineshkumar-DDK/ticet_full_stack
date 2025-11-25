const homePath = ()=>'/';
const ticketsPath = ()=>'/tickets';
const ticketPath = (id: string | number) => `/tickets/${id}`;
const editTicketPath = (id: string | number) => `/tickets/${id}/edit`;
const signIn  =()=>"/signin";
const signUp = ()=>"/signup";
const forgotPassword = ()=>"/forgotpassword";

export {homePath, ticketsPath, ticketPath, editTicketPath,signIn,signUp,forgotPassword};
