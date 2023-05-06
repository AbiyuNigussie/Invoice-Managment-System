import React from "react";
import { useState, useEffect, useReducer } from "react";
import { MdOutlineCreate } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { BsDatabase } from "react-icons/bs";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { CreateSubNav, RecordsSubNav, ReportSubNav } from "./SubNav";
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

const SideBar = (props) => {
  //   const [expanded, setExpanaded] = useState(false);
  //   //   useEffect(() => {
  //   //     console.log(expanded);
  //   //   }, [expanded]);

  const [expanded, dispatch] = useReducer(reducer, initialValues);

  return (
    <div className="shrink-[5] container flex flex-col gap-6 bg-slate-950 text-gray-300  max-md:hover:w-48 max-md:justify-items-center transition-all ease-in-out duration-500 ">
      <div className="container mt-10">
        <div className="flex flex-col">
          <div
            className="flex gap-2 pl-4 py-2 items-center hover:bg-slate-800 hover:text-white"
            onClick={() => dispatch({ expansion: true, id: 1 })}
          >
            <MdOutlineCreate className="h-8 w-8 " />
            <p className="text-l">Create</p>
            {expanded[0].isExpanded ? (
              <MdExpandLess className="ml-auto mr-5" />
            ) : (
              <MdExpandMore className="ml-auto mr-5" />
            )}
          </div>
          {expanded[0].isExpanded ? <CreateSubNav /> : ""}
        </div>
        <div className="flex flex-col">
          <div
            className="flex gap-2 pl-4 py-2 items-center hover:bg-slate-800 hover:text-white"
            onClick={() => dispatch({ expansion: true, id: 2 })}
          >
            <BsDatabase className="h-8 w-8 " />
            <p className="text-l">Records</p>
            {expanded[1].isExpanded ? (
              <MdExpandLess className="ml-auto mr-5" />
            ) : (
              <MdExpandMore className="ml-auto mr-5" />
            )}
          </div>
          {expanded[1].isExpanded ? <RecordsSubNav /> : ""}
        </div>
        <div className="flex flex-col">
          <div
            className="flex gap-2 pl-4 py-2 items-center hover:bg-slate-800 hover:text-white"
            onClick={() => dispatch({ expansion: true, id: 3 })}
          >
            <TbReportAnalytics className="h-8 w-8" />
            <p className="text-l">Report</p>
            {expanded[2].isExpanded ? (
              <MdExpandLess className="ml-auto mr-5" />
            ) : (
              <MdExpandMore className="ml-auto mr-5" />
            )}
          </div>
          {expanded[2].isExpanded ? <ReportSubNav /> : ""}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
