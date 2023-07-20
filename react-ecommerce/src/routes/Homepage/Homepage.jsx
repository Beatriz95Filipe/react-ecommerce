import style from "./style.module.scss";

import { Link } from "react-router-dom";
import Splash from "../../components/Homepage/Splash/Splash";
import Categories from "../../components/Homepage/Categories/Categories";

const HomePage = () => {
  return (
    <>
      <Splash />
      <Categories />
    </>
  );
};

export default HomePage;