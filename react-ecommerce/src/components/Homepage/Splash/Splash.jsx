import style from "./style.module.scss";
import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_colors.scss";
import "/src/shared/_mixins.scss";
import "/src/shared/_buttons.scss";

import { Link } from "react-router-dom";

const Splash = () => {

    
    return(
        <section className={`${style.splash} ${"container--fluid"}`}>
            <img src="/src/assets/homepage/01-splash-screen.webp" alt="splash-image" />
            <div className={style.splash__items}>
                <p className={style.splash__slogan}>Clever designs, delivered free</p>
                <Link to="/category/LivingRoom">
                    <button className={"btn__shop"}>SHOP LIVING ROOM</button>
                </Link>
            </div>
        </section>
    );
};

export default Splash;