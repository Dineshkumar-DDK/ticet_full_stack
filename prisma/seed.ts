import { hash } from "@node-rs/argon2";
import { PrismaClient, TicketStatus } from "@prisma/client"
const prisma = new PrismaClient();

const users = [
    {
        username:"admin",
        email:"admin@admin.com"
    },
    {
        username:"newuser",
        email:"newuser@gmail.com"
    }
]
const tickets = [
    {
        title: "ticket 1",
        content: "this is the first ticket from db",
        status: TicketStatus.OPEN,
        bounty: 22,
        deadline: "2024-12-31"
    },
    {
        title: "ticket 2",
        content: " this is the second ticket from db",
        status: TicketStatus.IN_PROGRESS,
        bounty: 33,
        deadline: "2024-12-31"

    },
    {
        title: "ticket 3",
        content: "this is the third ticket from db",
        status: TicketStatus.CLOSED,
        bounty: 33,
        deadline: "2024-12-31"
    }
]

const seed = async () => {
    console.log("Seeding started...")
    const t0 = performance.now();
    try {
        await prisma.ticket.deleteMany({});
        await prisma.user.deleteMany({});
        const passwordHash = await hash('ragasiyam');
        const dbUsers =  await prisma.user.createManyAndReturn(
            {
                data:users.map((user)=>({
                    ...user,
                    passwordHash
                }))
            }
        )

        console.log(dbUsers,"chekcing the db..")

        await prisma.ticket.createMany({
            data:tickets.map((ticket)=>({
                ...ticket,
                userId:dbUsers[0].id
            }))
        })

        await prisma.ticket.createMany(
            { data: tickets }
        )
    }
    catch (err) {
        console.log(`error with prisma - ${err}`)
    }

    const t1 = performance.now()
    console.log(`Seeding done within ${t1 - t0} seconds`)
}

seed();