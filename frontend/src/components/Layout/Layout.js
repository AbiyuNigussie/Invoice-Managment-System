import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
const Layout = ({ children }) => {
  return (
    <div className="container flex flex-col h-full">
      <Header />
      <div className="container flex h-full">
        <SideBar />
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
