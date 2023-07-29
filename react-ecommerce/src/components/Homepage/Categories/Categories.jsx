import React, { useContext } from "react";
import { ContextApi } from "../../../ContextApi/ContextApi";

import CategoryCard from "../../Homepage/Categories/CategoryCard";

import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_colors.scss";
import "/src/shared/_mixins.scss";
import "/src/shared/_buttons.scss";
import "/src/shared/_thumbnails.scss";

const Categories = () => {

    const { categories } = useContext(ContextApi);
  
    const categoryThumbnail = categories.map((category) => (
        <CategoryCard
            keyId={category.id}
            linkTo={`/category/${category.categoryName}`}
            imgSrc={category.categoryThumbnail}
            imgAlt={category.categoryName}
            categoryName={category.categoryName}
        />
    ));

    return(
        <section className={"container"}>
            <p className={"slogan"}>Clever designs, delivered free</p>
            <div className={`${"row"} ${"categories__thumbnail"}`}>
                {categoryThumbnail}
                {/* <CategoryCard
                    linkTo={"/category"}
                    imgSrc="/src/assets/homepage/03-categories/category-seating.webp"
                    imgAlt="Seating"
                    categoryName="Seating"
                />
                <CategoryCard
                    linkTo={"/category"}
                    imgSrc="/src/assets/homepage/03-categories/category-outdoor.webp"
                    imgAlt="Outdoor"
                    categoryName="Outdoor"
                />
                <CategoryCard
                    linkTo={"/category"}
                    imgSrc="/src/assets/homepage/03-categories/category-storage.webp"
                    imgAlt="Storage"
                    categoryName="Storage"
                />
                <CategoryCard
                    linkTo={"/category"}
                    imgSrc="/src/assets/homepage/03-categories/category-bedroom.webp"
                    imgAlt="Bedroom"
                    categoryName="Bedroom"
                />
                <CategoryCard
                    linkTo={"/category"}
                    imgSrc="/src/assets/homepage/03-categories/category-tables.webp"
                    imgAlt="Tables"
                    categoryName="Living Room"
                />
                <CategoryCard
                    linkTo={"/category"}
                    imgSrc="/src/assets/homepage/03-categories/category-rugs.webp"
                    imgAlt="Rugs"
                    categoryName="Rugs"
                /> */}
            </div>
        </section>
    );
};

export default Categories;

//MELHORAR: criar um ciclo que passe por um array de objectos de categorias!