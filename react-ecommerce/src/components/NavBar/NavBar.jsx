import { Link } from "react-router-dom";

const style = {
  display: "flex",
  gap: "20px"
};

const NavBar = () => {
  return (
    <nav style={style}>
      <Link to={"/"}>Homepage</Link>
      <Link to={"/category"}>CategoryPage</Link>
      <Link to={"/product"}>ProductPage</Link>
    </nav>
  );
};

export default NavBar;