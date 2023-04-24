import React from "react";

const CreateSubNav = () => {
  return (
    <div className="flex flex-col bg-slate-950 text-gray-300">
      <a href="" className="pl-16 py-2  hover:bg-slate-800 hover:text-white">
        <p>Invoice</p>
      </a>
      <a href="" className="pl-16 py-2  hover:bg-slate-800 hover:text-white">
        <p>Product</p>
      </a>
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
