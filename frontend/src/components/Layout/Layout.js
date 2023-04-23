import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <SideBar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
