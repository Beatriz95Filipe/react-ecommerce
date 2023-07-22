import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_thumbnails.scss";

import CategoryItem from "../../components/CategoryItem/CategoryItem";

const CategoryPage = () => {
  return (
    <section className={"container"}>
      <p className={"category__title"}>All Seating</p>
      <p className={"category__info"}>The main feature of any living room is always going to be the seating. Pick and choose your seating styles to build the perfect place to relax. Unwind by yourself, spend time with your family, or entertain guests, all in ultimate comfort.</p>
      <div className={`${"row"} ${"category__product__thumbnail"}`}>
        <CategoryItem
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
        />
      </div>
  </section>
  );
};

export default CategoryPage;