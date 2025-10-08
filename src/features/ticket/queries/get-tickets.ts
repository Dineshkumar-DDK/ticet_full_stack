import {prisma} from '@/lib/prisma'
export const getTickets=async()=>{
    throw new Error("Database connection error")
    // return await prisma.ticket.findMany(
    //     {
    //         orderBy:{
    //             createAt:"desc",
    //         },
    //     }
    // );
}