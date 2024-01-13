"use client";
import React from 'react';
import { TbNumbers } from "react-icons/tb";
import { GoPeople } from "react-icons/go";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function NumberSelect() {
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className='overflow-hidden z-20'>
      <div className='flex justify-start items-center gap-1'>
      <GoPeople />
        <h2 className='text-sm capitalize'>number of people </h2>
      </div>
    <Select defaultValue="Pick number" >
      <SelectTrigger className="capitalize bg-transparent rounded-[8px] border-slate-300/20 ">
        <SelectValue placeholder="Pick number" className='font-extrabold'/>
      </SelectTrigger>
      <SelectContent className="w-[80px] border-none rounded-[10px]">
        <SelectGroup >
          <SelectItem
            value="Pick number"
            disabled
            className="uppercase flex items-center cursor-not-allowed flex-row"
            >
             Pick number
 
          </SelectItem>
          {numbers.map((number) => (
            <SelectItem key={number} value={number.toString()} className="uppercase flex items-center cursor-pointer z-20">
        
              {number}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
          </div>
  );
}

export default NumberSelect;
