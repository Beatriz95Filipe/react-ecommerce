import style from "./style.module.scss";
import carousel from "./product-carousel.module.scss";

import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_colors.scss";
import "/src/shared/_thumbnails.scss";
import "/src/shared/_buttons.scss";

import { useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import { ContextApi } from "../../../ContextApi/ContextApi";
import useChoosenProduct from "../../../customHooks/useChoosenProduct";

import ChoosenColor from "./ChoosenColor";
import ChoosenProductSeating from "./ChoosenProductSeating";
import ProductCounter from "./ProductCounter";

const ChoosenProduct = () => {

    const { choosenProduct } = useChoosenProduct();
    // const { id } = useParams();
    // console.log(id); 

    // const { products } = useContext(ContextApi);

    // const choosenProduct = products.find(
    //     (product) => product.id === parseInt(id)
    // );
    //console.log(choosenProduct);

    //prevent default page refresh - acções dentro do <form>
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    //add to cart info
    const [productQuantity, setProductQuantity] = useState(0);

    const handleProductQuantityChange = (newQuantity) => {
        setProductQuantity(newQuantity);
    }; //passar o useState do selectedColor para aqui de forma a conseguir ter a selectedColor neste componente

    const productToCart = {
        product: choosenProduct?.name,
        quantity: productQuantity
    }; 

    let getcurrentDate = new Date();
    let getDay = getcurrentDate.getDate();
    let getMonth = getcurrentDate.getMonth();
    let getYear = getcurrentDate.getFullYear();

    const currentDate = `${getYear}-${getMonth}-${getDay}`;
    //console.log(currentDate);

    const userId = 192837;

    const addToCartData = {
        userId: userId,
        date: currentDate,
        products: [productToCart]
    } //alterar para tbm passar a selected color

    //acção add to cart
    const handleAddToCart = () => {
        console.log(addToCartData);
        alert("Product added to cart!");
    }; // colocar a lógica do cart info neste handler - fazer fetch com method: PUT (update) para enviar para uma database


    return (
        <section className={"container"}>
            <p className={"product__title"}>{choosenProduct?.name}</p>
            <div className={"row"}>
                <div className={"col-lg-8"}>
                    <div className={carousel.carousel}>
                        <img src={choosenProduct?.imageSrc} alt={choosenProduct?.name} id="slide-1" />
                        <img src={choosenProduct?.imageHover} alt={choosenProduct?.name} id="slide-2" />
                        <img src="/src/assets/products/hoverImg/product-hover-1.webp" alt={choosenProduct?.name} id="slide-3" />
                        <img src="/src/assets/products/hoverImg/product-hover-2.webp" alt={choosenProduct?.name} id="slide-4" />
                        <img src="/src/assets/products/hoverImg/product-hover-3.webp" alt={choosenProduct?.name} id="slide-5" />
                    </div>
                    <div className={carousel.carousel__preview}>
                        <a href="#slide-1"><img src={choosenProduct?.imageSrc} alt={choosenProduct?.name} /></a>
                        <a href="#slide-2"><img src={choosenProduct?.imageHover} alt={choosenProduct?.name} /></a>
                        <a href="#slide-3"><img src="/src/assets/products/hoverImg/product-hover-1.webp" alt={choosenProduct?.name} /></a>
                        <a href="#slide-4"><img src="/src/assets/products/hoverImg/product-hover-2.webp" alt={choosenProduct?.name} /></a>
                        <a href="#slide-5"><img src="/src/assets/products/hoverImg/product-hover-3.webp" alt={choosenProduct?.name} /></a>
                    </div>
                </div>
                <div className={"col-lg-4"}>
                    <p className={"choosen__product__name"}>{choosenProduct?.name}</p>
                    <p className={"choosen__product__price"}>{choosenProduct?.price} - Free Shipping</p>
                    <form action="" onSubmit={handleSubmit}>
                        <ChoosenColor />
                        {choosenProduct?.categoryName === "Seating" && (<ChoosenProductSeating />)}
                        <div id="addToCart" className={style.product_form}>
                            <ProductCounter
                                productQuantity={productQuantity}
                                quantityChanged={handleProductQuantityChange}
                            />
                            <div className={style.cart}>
                                <button type="submit" id="addToCartBtn" className="btn__cart" onClick={handleAddToCart}>add to cart</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ChoosenProduct;