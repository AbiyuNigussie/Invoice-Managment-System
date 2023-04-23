import React from "react";
import { useState, useEffect, useReducer } from "react";
import { MdOutlineCreate } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { BsDatabase } from "react-icons/bs";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const initialValues = [
  {
    id: 1,
    isExpanded: false,
  },
  {
    id: 2,
    isExpanded: false,
  },
  {
    id: 3,
    isExpanded: false,
  },
];
const reducer = (state, action) => {
  if (action.expansion === true) {
    return state.map((each) => {
      if (each.id === action.id) {
        return { ...each, isExpanded: !each.isExpanded };
      } else {
        return each;
      }
    });
  }
};

const SideBar = () => {
  //   const [expanded, setExpanaded] = useState(false);
  //   //   useEffect(() => {
  //   //     console.log(expanded);
  //   //   }, [expanded]);

  const [expanded, dispatch] = useReducer(reducer, initialValues);

  return (
    <div className="container flex flex-col gap-6 pl-4 pt-10 fixed box-border h-full w-48 z-1 bg-slate-950 text-gray-300  max-md:w-16 max-md:justify-items-center transition-all ease-in-out duration-500 ">
      <div
        className="flex gap-2 items-center"
        onClick={() => dispatch({ expansion: true, id: 1 })}
      >
        <MdOutlineCreate className="h-8 w-8 " />
        <p className="text-l max-md:hidden">Create</p>
        {expanded[0].isExpanded ? <MdExpandLess /> : <MdExpandMore />}
      </div>
      <div
        className="flex gap-2 items-center"
        onClick={() => dispatch({ expansion: true, id: 2 })}
      >
        <BsDatabase className="h-8 w-8 " />

        <p className="text-l max-md:hidden">Records</p>
        {expanded[1].isExpanded ? <MdExpandLess /> : <MdExpandMore />}
      </div>
      {/* <a href="#" className="flex gap-2 items-center">
        <AiOutlinePlus className="h-8 w-8" />
        <p className="text-l max-md:hidden">Add Product</p>
      </a> */}
      <div
        className="flex gap-2 items-center"
        onClick={() => dispatch({ expansion: true, id: 3 })}
      >
        <TbReportAnalytics className="h-8 w-8" />

        <p className="text-l max-md:hidden">Report</p>
        {expanded[2].isExpanded ? <MdExpandLess /> : <MdExpandMore />}
      </div>
    </div>
  );
};

export default SideBar;
