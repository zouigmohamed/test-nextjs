"use client";

import { format } from "date-fns";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="">
      <div className="flex items-center gap-3">
      <CiCalendarDate />
        <h2 className="text-sm">choose date </h2>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[140px] justify-between text-left font-normal border-none bg-transparent",
              !date && "text-muted-foreground"
            )}
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <IoIosArrowDown />

          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 border-none bg-white" align="start" >
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
            className=" border-none rounded-[10px]"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
