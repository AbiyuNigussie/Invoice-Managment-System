import React from "react";
import { useState } from "react";
import { FaFileInvoice } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import SideBar from "./SideBar";

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="container flex flex-col gap-2 mx-auto">
      <div className="flex gap-x-10 px-5 py-5 font-sans bg-slate-800 text-slate-200 text-4xl">
        <BsList className="h-8 w-8 md:hidden" />
        <div className="flex gap-x-1">
          <FaFileInvoice />
          <h1>IMS</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
