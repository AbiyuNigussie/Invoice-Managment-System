import React from "react";
import { FaFileInvoice } from "react-icons/fa";
const Header = () => {
  return (
    <div className="container bg-slate-800 py-5 mx-auto">
      <div className="flex gap-x-2 ml-7 font-sans text-slate-200 text-4xl ">
        <FaFileInvoice />
        <h1>IMS</h1>
      </div>
    </div>
  );
};

export default Header;
