import { Link } from "react-router-dom";

import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_thumbnails.scss";

const CategoryItem = ({ linkTo, imgSrc, imgAlt, hoverSrc, hoverAlt, itemName, itemPrice }) => {
  return (
    <div className={`${"col-lg-4"} ${"product__thumbnail"}`}>
        <Link to={linkTo}>
            <img className={"main__img"} src={imgSrc} alt={imgAlt} />
            <img className={"hover__img"} src={hoverSrc} alt={hoverAlt} />
        </Link>
        <p className={"category__product__text"}>{itemName}</p>
        <p className={"category__product__price"}>{itemPrice}</p>
    </div>
  );
};

export default CategoryItem;