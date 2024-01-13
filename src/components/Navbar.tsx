"use client"
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { navbarItems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

interface IPropsNavbar {}

const Navbar = ({}: IPropsNavbar) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex z-50 justify-between mt-2 w-full items-center absolute top-0 left-1/2 transform bg-white/10 -translate-x-1/2  ${
        isScrolled ? "backdrop-blur-xl text-slate-900" : "backdrop-blur-sm text-white"
      } p-2 rounded-[10px] h-28 transition-all`}
    >
      <div>
        <Image src="/logo.svg" width={60} height={60} alt="logo" />
      </div>
      <div className="">
        <ul className="flex space-x-4 capitalize items-center">
          {navbarItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.Path}
                className={`${
                  pathname === item.Path
                    ? "border-b-2  border-[#fa8b02]"
                    : "border-b-2 border-transparent "
                } pb-2  hover:border-b-2  hover:border-[#fa8b02] mx-2`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-2 items-center">
        <Select defaultValue="EN">
          <SelectTrigger className="  uppercase bg-transparent rounded-[8px] border-slate-300/20">
            <SelectValue placeholder="EN" />
          </SelectTrigger>
          <SelectContent className="w-[80px] bg-slate-600/40 border-none rounded-[10px]">
            <SelectGroup>
              <SelectItem
                value="FR"
                className="uppercase flex items-center cursor-pointer "
              >
                <Image
                  src="/flag-fr.svg"
                  width={20}
                  alt="language"
                  height={20}
                  className="mr-2 inline-block"
                />
                fr
              </SelectItem>
              <SelectItem
                value="EN"
                className="uppercase flex items-center cursor-pointer"
              >
                <Image
                  src="/flag-en.svg"
                  width={20}
                  alt="language"
                  height={20}
                  className="mr-2 inline-block"
                />
                en
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex items-center">
          <Button>Login</Button>
          <Button
            size="lg"
            variant={"default"}
            className="bg-[#FA8B02] rounded-full text-white capitalize text-lg border-2 border-transparent hover:border-[#FA8B02] duration-700 "
          >
            sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
