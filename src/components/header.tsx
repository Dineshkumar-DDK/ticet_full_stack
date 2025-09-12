import { LucideKanban } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import * as Paths from "@/app/paths"
const Header = () => {
   return <nav
        className='
        flex justify-between
        py-2.5 px-5 w-full
        fixed top-0 left-0 right-0 z-20
        border-b bg-background/95 backdrop-blur
        supports-backdrop-blur:bg-background/60
        '>
        <div>
            <Link href={Paths.homePath()}
                className={buttonVariants({ variant: 'ghost' })}
            >
                <LucideKanban />
                <h1 className="text-lg font-semibold ml-2">TicketBounty</h1>
            </Link>
        </div>
        <div>
            <Link href={Paths.ticketsPath()} className={buttonVariants({ variant: "default" })}>Tickets</Link>
        </div>
    </nav>

}

export { Header }