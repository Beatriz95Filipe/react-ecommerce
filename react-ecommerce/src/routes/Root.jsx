import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

const Root = () => {
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