import { Link } from "react-router-dom";

import style from "./style.module.scss";
import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_colors.scss";
import "/src/shared/_mixins.scss";


const NavBar = () => {
  return (
    <nav  className={`${"container--fluid"} ${style.nav}`}>
      <Link to={"/"} className={style.nav__logo__main}><img src="/src/assets/homepage/01-logo.png" alt="brand-logo" /></Link>
      <div className={style.nav__menu__main}>
        <Link to={"/category"} className={style.menu__item}>
          <span className={style.menu__item__label}>Seating</span>
        </Link>
        <Link to={"/category"} className={style.menu__item}>
          <span className={style.menu__item__label}>Living Room</span>
        </Link>
        <Link to={"/category"} className={style.menu__item}>
          <span className={style.menu__item__label}>Outdoor</span>
        </Link>
        <Link to={"/category"} className={style.menu__item}>
          <span className={style.menu__item__label}>Bedroom</span>
        </Link>
        <Link to={"/category"} className={style.menu__item}>
          <span className={style.menu__item__label}>Storage</span>
        </Link>
      </div>
      {/* <Link to={"/product"}>ProductPage</Link> */}
    </nav>
  );
};

export default NavBar;