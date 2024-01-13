import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoMdTimer } from "react-icons/io";

function TimeSelect() {
  const times = Array.from(
    { length: 12 },
    (_, index) => `${index + 1}:00 ${index < 6 ? "am" : "pm"}`
  );

  return (
    <div>
      <div className="flex items-center gap-3">
        <IoMdTimer />
        <h2 className="text-sm capitalize">choose time </h2>
      </div>
      <Select defaultValue="Select Time">
        <SelectTrigger className="capitalize bg-transparent rounded-[8px] border-slate-300/20 ">
          <SelectValue placeholder="Select Time" className="font-extrabold" />
        </SelectTrigger>
        <SelectContent className="w-[100px] bg-white border-none rounded-[10px]">
          <SelectGroup>
            <SelectItem
              value="Select Time"
              disabled
              className="uppercase flex items-center cursor-not-allowed"
            >
              Select Time
            </SelectItem>
            {times.map((time, index) => (
              <SelectItem
                key={index}
                value={time}
                className="uppercase flex items-center cursor-pointer"
              >
                {time}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default TimeSelect;
