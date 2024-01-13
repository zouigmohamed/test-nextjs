import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaCar } from "react-icons/fa";

function TransportSelect() {
  const transportOptions = [
    "Minivan and Bus",
    "Transfers & NCC",
    "Luxury Experience",
  ];

  return (
    <div>
      <div className="flex items-center gap-3">
      <FaCar />
        <h2 className="text-sm">choose transport </h2>
      </div>
      <Select defaultValue="Select Transport">
        <SelectTrigger className="capitalize bg-transparent rounded-[8px] border-slate-300/20 ">
          <SelectValue
            placeholder="Select Transport"
            className="font-extrabold"
          />
        </SelectTrigger>
        <SelectContent className="w-[180px] bg-white border-none rounded-[10px]">
          <SelectGroup>
            <SelectItem
              value="Select Transport"
              disabled
              className="uppercase flex items-center cursor-not-allowed"
            >
              Select Transport
            </SelectItem>
            {transportOptions.map((transport, index) => (
              <SelectItem
                key={index}
                value={transport}
                className=" flex items-center cursor-pointer"
              >
                {transport}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default TransportSelect;
