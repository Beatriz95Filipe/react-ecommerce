import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_video.scss";
import "/src/shared/_thumbnails.scss";

import CategoryItem from "../../CategoryItem/CategoryItem";

import { useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import { ContextApi } from "../../../ContextApi/ContextApi";
import useChoosenProduct from "../../../customHooks/useChoosenProduct";

const RelatedProducts = () => {

    const { choosenProduct, matchingCategory } = useChoosenProduct();
    const { products } = useContext(ContextApi);

    const relatedProducts = products.filter(
        (product) => product.categoryName === choosenProduct?.categoryName
    );

    console.log(relatedProducts)

    let relatedThree = relatedProducts.slice(0, 3);
    console.log(relatedThree);

    const showRelatedProducts = relatedThree.map((product) => (
        <CategoryItem
            linkTo={`/product/${product.id}`}
            imgSrc={product.imageSrc}
            imgAlt={product.name}
            hoverSrc={product.imageHover}
            hoverAlt={product.name}
            itemName={product.name}
            itemPrice={product.price}
        />
    ));
    
    //o price: number para se conseguir fazer cálculos no addToCart, o símbolo € era escrito à parte
    // quando clico num relatedproduct a pág actualiza, mas não volta para o topo


    return (
        <section className="container">
            <p className="slogan">Here's what else our designers recommend</p> 
            <div className="row category__product__thumbnail">
                {showRelatedProducts}
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

export default RelatedProducts;