import React from "react";
import { Link } from "react-router-dom";
const CreateSubNav = () => {
  return (
    <div className="flex flex-col bg-slate-950 text-gray-300">
      {/* <a href="" className="pl-16 py-2  hover:bg-slate-800 hover:text-white"> </a> */}
      <Link
        to="/create-invoice"
        className="pl-16 py-2  hover:bg-slate-800 hover:text-white"
      >
        Invoice
      </Link>

      <Link
        to="/create-product"
        className="pl-16 py-2  hover:bg-slate-800 hover:text-white"
      >
        Product
      </Link>
    </div>
  );
};
const RecordsSubNav = () => {
  return (
    <div className="flex flex-col bg-slate-950 text-gray-300">
      <a href="" className="pl-16 py-2  hover:bg-slate-800 hover:text-white">
        <p>Invoices Data</p>
      </a>
      <a href="" className="pl-16 py-2  hover:bg-slate-800 hover:text-white">
        <p>Products Data</p>
      </a>
    </div>
  );
};

const ReportSubNav = () => {
  return (
    <div className="flex flex-col bg-slate-950 text-gray-300">
      <a href="" className="pl-16 py-2  hover:bg-slate-800 hover:text-white">
        <p>Invoice Report</p>
      </a>
      <a href="" className="pl-16 py-2  hover:bg-slate-800 hover:text-white">
        <p>Product Report</p>
      </a>
    </div>
  );
};

export { CreateSubNav, RecordsSubNav, ReportSubNav };
