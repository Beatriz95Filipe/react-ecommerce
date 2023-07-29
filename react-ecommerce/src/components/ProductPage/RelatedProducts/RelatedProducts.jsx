import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_video.scss";
import "/src/shared/_thumbnails.scss";

import CategoryItem from "../../CategoryItem/CategoryItem";

const RelatedProducts = () => {

    //através da categoria do produto, mostrar 3 produtos da mesma categoria - TORNAR DINÂMICO

  return (
    <section className="container">
        <p className="slogan">Here's what else our designers recommend</p>
        <div className="row category__product__thumbnail">
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

export default RelatedProducts;