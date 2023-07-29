import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ContextApi } from "../ContextApi/ContextApi";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

const Root = () => {

  const { categories, products } = useContext(ContextApi);
  
  return (
    <>
      <NavBar />
      <Outlet />
      <Contact />
      <Footer />
    </>
  );
};

export default Root;