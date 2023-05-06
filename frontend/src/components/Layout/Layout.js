import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className=" flex h-full">
        <SideBar />
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
