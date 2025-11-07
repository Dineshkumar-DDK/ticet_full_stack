"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export type DatePickerProps ={
    id:string,
    name:string,
    defaultValue:string | undefined
}
const DatePicker =({id,name,defaultValue}:DatePickerProps)=>{
  const [date, setDate] = React.useState<Date | undefined>(
    defaultValue?new Date(defaultValue):new Date()
  )
  const formattedDate = date ? format(date, "yyyy-MM-dd") : ""
  return (  
    <Popover>
      <PopoverTrigger className="w-full" id={id} asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="justify-start text-left font-normal"
        >
          <CalendarIcon />
          {formattedDate}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  )
}

export {DatePicker}