import { Link } from "react-router-dom";

import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_colors.scss";
import "/src/shared/_mixins.scss";
import "/src/shared/_buttons.scss";
import "/src/shared/_thumbnails.scss";

const Categories = () => {
    return(
        <section className={"container"}>
            <p className={"slogan"}>Clever designs, delivered free</p>
            <div className={`${"row"} ${"categories__thumbnail"}`}>
                <div className={"col-lg-4"}>
                    <Link to={"/category"}>
                        <img src="/src/assets/homepage/03-categories/category-seating.webp" alt="seating" />
                    </Link>
                    <p className={"categories__thumbnail__text"}>Seating</p>
                </div>
                <div className={"col-lg-4"}>
                    <Link to={"/category"}>
                        <img src="/src/assets/homepage/03-categories/category-outdoor.webp" alt="outdoor" />
                    </Link>  
                    <p className={"categories__thumbnail__text"}>Outdoor</p>
                </div>
                <div className={"col-lg-4"}>
                    <Link to={"/category"}>
                        <img src="/src/assets/homepage/03-categories/category-storage.webp" alt="storage" />
                    </Link>
                    <p className={"categories__thumbnail__text"}>Storage</p>
                </div>
                <div className={"col-lg-4"}>
                    <Link to={"/category"}>
                        <img src="/src/assets/homepage/03-categories/category-bedroom.webp" alt="Bedroom" />
                    </Link>
                    <p className={"categories__thumbnail__text"}>Bedroom</p>
                </div>
                <div className={"col-lg-4"}>
                    <Link to={"/category"}>
                        <img src="/src/assets/homepage/03-categories/category-tables.webp" alt="Tables" />
                    </Link>
                    <p className={"categories__thumbnail__text"}>Tables</p>
                </div>
                <div className={"col-lg-4"}>
                    <Link to={"/category"}>
                        <img src="/src/assets/homepage/03-categories/category-rugs.webp" alt="Rugs" />
                    </Link>
                    <p className={"categories__thumbnail__text"}>Rugs</p>
                </div>
            </div>
        </section>
    );
};

export default Categories;