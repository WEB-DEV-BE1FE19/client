import NavLog from "../component/NavLog";
import Footer from "../component/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const DashboardLayout = ({ children }) => {
  // const store = useSelector((state) => state);
  // console.log(store);

  // useEffect(() => {
  //   if (store.user.authStatus === false) window.location.href = "/masuk";
  // }, []);

  return (
    <>
      <NavLog />
      {children}
      <Footer />
    </>
  );
};

export default DashboardLayout;
