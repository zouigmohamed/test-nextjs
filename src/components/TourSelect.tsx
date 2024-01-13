import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { tourOptions } from "@/data/data";
import { LuFlagTriangleRight } from "react-icons/lu";

function TourSelect() {


  return (
    <div>
      <div className="flex items-center gap-3">
        <LuFlagTriangleRight />
        <h2 className="text-sm capitalize">choose tour </h2>
      </div>
      <Select defaultValue="Select Tour">
        <SelectTrigger className="capitalize bg-transparent rounded-[8px] border-slate-300/20 ">
          <SelectValue placeholder="Select Tour" className="font-extrabold" />
        </SelectTrigger>
        <SelectContent className=" bg-white border-none rounded-[10px]">
          <SelectGroup>
            <SelectItem
              value="Select Tour"
              disabled
              className="uppercase flex items-center cursor-not-allowed "
            >
              Select Tour
            </SelectItem>
            {tourOptions.map((tour, index) => (
              <SelectItem
                key={index}
                value={tour.name}
                className="capitalize flex items-center cursor-pointer "
              >
                {tour.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default TourSelect;
