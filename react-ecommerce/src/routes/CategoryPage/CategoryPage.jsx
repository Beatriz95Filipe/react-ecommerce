import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_thumbnails.scss";

import CategoryItem from "../../components/CategoryItem/CategoryItem";
import SearchBar from "../../components/searchBar/SearchBar";

import useFetchCategories from "../../hooks/useFetchCategories";
import useFetchProductsByCategory from "../../hooks/useFetchProductsByCategory";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  
  const { categoryName } = useParams();
  //console.log(categoryName);

  const { categories } = useFetchCategories();
  const clickedCategory = categories.find(
    (category) => category.categoryName === categoryName
  );

  const { products } = useFetchProductsByCategory(categoryName);
  //console.log(products);
  
  const productsByCategory = products.map((product) => (
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
      {/* SEARCHBAR */}
      <SearchBar />
      <div className={`${"row"} ${"category__product__thumbnail"}`}>
        {productsByCategory}
        {/* <CategoryItem
          linkTo={"/product"}
          imgSrc="/src/assets/products/seating/1/product.webp"
          imgAlt="seating1"
          hoverSrc="/src/assets/products/seating/1/product-hover.webp"
          hoverAlt="seating1h"
          itemName="Nomad Sofa"
          itemPrice="€1595 or as low as €100/mo"
        />
        <CategoryItem
          linkTo={"/product"}
          imgSrc="/src/assets/products/seating/2/product.webp"
          imgAlt="seating2"
          hoverSrc="/src/assets/products/seating/2/product-hover.webp"
          hoverAlt="seating2h"
          itemName="Nomad Sofa"
          itemPrice="€1595 or as low as €100/mo"
        />
        <CategoryItem
          linkTo={"/product"}
          imgSrc="/src/assets/products/seating/3/product.webp"
          imgAlt="seating3"
          hoverSrc="/src/assets/products/seating/3/product-hover.webp"
          hoverAlt="seating3h"
          itemName="Nomad Sofa"
          itemPrice="€1595 or as low as €100/mo"
        /> */}
      </div>
  </section>
  );
};

export default CategoryPage;