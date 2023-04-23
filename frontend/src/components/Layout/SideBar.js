import React from "react";
import { MdOutlineCreate } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
const SideBar = () => {
  return (
    <div className="container flex flex-col gap-6 pl-4 pt-5 fixed box-border h-full w-48 z-1 bg-slate-950 text-gray-300  max-md:w-16 max-md:justify-items-center transition-all ease-in-out duration-500 ">
      <a href="#" className="flex gap-2 items-center">
        <MdOutlineCreate className="h-8 w-8 " />

        <p className="text-l max-md:hidden">Create Invoice</p>
      </a>
      <a href="#" className="flex gap-2 items-center">
        <AiOutlineUnorderedList className="h-8 w-8" />

        <p className="text-l max-md:hidden">Invoice List</p>
      </a>
      <a href="#" className="flex gap-2 items-center">
        <TbReportAnalytics className="h-8 w-8" />

        <p className="text-l max-md:hidden">Report</p>
      </a>
    </div>
  );
};

export default SideBar;
