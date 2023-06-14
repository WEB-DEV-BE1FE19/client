import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useState } from "react";

const MainLayouts = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayouts;
