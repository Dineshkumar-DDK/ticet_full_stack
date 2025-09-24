import { Heading } from "@/components/heading";
import Link from "next/link";
import * as Path from "@/app/paths";

export default function HomePage() {
  return (
    <div className='flex flex-col flex-1 space-y-8'>
       <Heading title="Home" description="Your home place to start"/>
       <div className="flex flex-col align-center flex-1">
         <Link prefetch href={Path.ticketsPath()} className="underline">View Tickets</Link>
       </div>
    </div>
  );
}
