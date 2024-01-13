import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { UsersRound } from 'lucide-react';
import { Globe2 } from 'lucide-react';
import { Search } from 'lucide-react';
import { DatePicker } from "./DatePicker";
import TimeSelect from "./TimeSelect";
import TourSelect from "./TourSelect";
import TransportSelect from "./TransportSelect";
import NumberSelect from "./selectPeople";
import { Button } from "./ui/button";

function HeroSection() {
  return (
    <div
      className="w-screen h-[90vh] relative "
      style={{
        backgroundImage: 'url("/home.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute z-10 top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-3/4  p-2 ">
        <h1 className="enjoy text-[80px] text-[#fffafa] capitalize ">
          enjoy in the best way
        </h1>
        <p className="text-[24px] font-bold text-white mb-2">
          Enjoy our services for your trip anytime
        </p>
        <div className=" p-4 rounded-[6px] bg-white/20 ">
          <Tabs isFitted variant="enclosed">
            <TabList className="flex  bg-transparent w-1/4 rounded-t-lg ">
              <Tab
                _selected={{
                  background: "white",
                  boxShadow: "lg",
                  borderTopLeftRadius: "10px",
                  color: "#FA8B02",
                }}
                className="p-2 w-full bg-white/40 rounded-tl-[10px]  capitalize flex space-x-1"
              >
                <Globe2 className="text-md" />
                <h3 className="text-sm font-semibold"> public tours</h3>
              </Tab>
              <Tab
                _selected={{
                  background: "white",
                  boxShadow: "lg",
                  borderTopRightRadius: "10px",
                  color: "#FA8B02",
                }}
                className="p-2 w-full bg-white/40 rounded-tl-[10px]  capitalize flex space-x-1"
              >
                <UsersRound className="text-md" />
                <h3 className="text-[13px] font-semibold"> private tours</h3>
              </Tab>
            </TabList>

            <TabPanels className="border-none rounded-2xl ">
              <TabPanel className="bg-white border-none justify-between items-center rounded-b-xl rounded-tr-xl flex p-2  flex-wrap">
                <NumberSelect />
                <TimeSelect />
                <TourSelect />
                <TransportSelect />
                <DatePicker />
                <Button
                  variant={"destructive"}
                  className="flex gap-2 bg-[#fa8b02] rounded-[6px] w-[100px] items-center justify-between"
                  size={"sm"}
                >
                  {" "}
                  <Search className="mx-1" />
                  search
                </Button>
              </TabPanel>
              <TabPanel className="bg-white/90 border-none justify-between items-center rounded-b-xl rounded-tr-xl flex p-2  flex-wrap">
                <NumberSelect />
                <TimeSelect />
                <TourSelect />
                <TransportSelect />
                <DatePicker />
                <Button
                  variant={"destructive"}
                  className="flex gap-2 bg-[#fa8b02] rounded-[6px] w-[100px] items-center justify-between"
                  size={"sm"}
                >
                  {" "}
                  <Search className="mx-1" />
                  search
                </Button>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
