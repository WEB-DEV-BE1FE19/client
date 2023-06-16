import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import NavLog from "../component/NavLog";

import { useEffect, useState } from "react";

const MainLayouts = ({ children }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setAuth(token);
    }
  }, [auth]);

  return (
    <>
      {auth ? <NavLog /> : <Navbar />}
      {children}
      <Footer />
    </>
  );
};

export default MainLayouts;
