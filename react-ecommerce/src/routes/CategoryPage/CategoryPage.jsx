import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_thumbnails.scss";

import CategoryItem from "../../components/CategoryItem/CategoryItem";
import SearchBar from "../../components/searchBar/SearchBar";

import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import { ContextApi } from "../../ContextApi/ContextApi";

const CategoryPage = () => {
  
  const { categoryName } = useParams();
  //console.log(categoryName);

  const { categories, products } = useContext(ContextApi);

  const clickedCategory = categories.find(
    (category) => category.categoryName === categoryName
  );

  const productsByCategory = products.filter(
    (product) => product.categoryName === categoryName
  );
  
  const showProducts = productsByCategory.map((product) => (
    <CategoryItem
      keyId={product.id}
      linkTo={`/product/${product.id}`}
      imgSrc={product.imageSrc}
      imgAlt={product.name}
      hoverSrc={product.imageHover}
      hoverAlt={product.name}
      itemName={product.name}
      itemPrice={product.price}
    />
  ));

  return (
    <section className={"container"}>
      <p className={"category__title"}>All {categoryName}</p>
      <p className={"category__info"}>{clickedCategory?.categoryMainText}</p>
      <SearchBar />
      <div className={`${"row"} ${"category__product__thumbnail"}`}>
        {
          productsByCategory.length === 0 ? (
          <p className="no_product">We don't have any {categoryName} at the moment...</p>
          ) : (showProducts)
        }
        {/* <CategoryItem
          linkTo={"/product"}
          imgSrc="/src/assets/products/seating/1/product.webp"
          imgAlt="seating1"
          hoverSrc="/src/assets/products/seating/1/product-hover.webp"
          hoverAlt="seating1h"
          itemName="Nomad Sofa"
          itemPrice="€1595 or as low as €100/mo"
        /> */}
      </div>
  </section>
  );
};

export default CategoryPage;