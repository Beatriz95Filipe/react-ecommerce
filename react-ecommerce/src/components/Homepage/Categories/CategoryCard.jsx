import { Link } from "react-router-dom";

import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_colors.scss";
import "/src/shared/_mixins.scss";
import "/src/shared/_buttons.scss";
import "/src/shared/_thumbnails.scss";

const CategoryCard = ({keyId, linkTo, imgSrc, imgAlt, categoryName}) => {
    return(
        <div className={"col-lg-4"} key={keyId}>
            <Link to={linkTo}>
                <img src={imgSrc} alt={imgAlt} />
            </Link>
            <p className={"categories__thumbnail__text"}>{categoryName}</p>
        </div>
    );
};

export default CategoryCard;