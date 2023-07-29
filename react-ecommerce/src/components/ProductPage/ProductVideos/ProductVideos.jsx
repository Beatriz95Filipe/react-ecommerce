import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_video.scss";
import "/src/shared/_thumbnails.scss";

import ProductVideoText from "./ProductVideoText";

import { useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import { ContextApi } from "../../../ContextApi/ContextApi";

const ProductVideos = () => {

    const { id } = useParams();
    console.log(id); 

    const { products, categories } = useContext(ContextApi);

    const choosenProduct = products.find(
        (product) => product.id === parseInt(id)
    );
    //console.log(choosenProduct);

    const productCategory = choosenProduct?.categoryName;
    console.log(productCategory);

    const matchingCategory = categories.find(
        (category) => category.categoryName === productCategory
    );
    console.log(matchingCategory);

    return (
        <section className={"container"}>
            <div className={`${"row"} ${"videos"}`}>
            <div className={"col-lg-6"}>
                    <video className={"product-video"} muted autoPlay loop>
                        <source src="/src/assets/videos/product-video-seating-1.mp4"/>
                        {/* quando uso {matchingCategory?.categoryVideo1} o vídeo deixa de aparecer, deve ter que ver com o tempo que o fetch da context api demora - RESOLVER*/}
                    </video>
                </div>
                <ProductVideoText
                    sloganVideoTitle={matchingCategory?.categoryVideo1Slogan}
                    sloganVideoText={matchingCategory?.categoryVideo1Text}
                    title1={matchingCategory?.subtitle1a}
                    text1={matchingCategory?.subtext1a}
                    title2={matchingCategory?.subtitle1b}
                    text2={matchingCategory?.subtext1b}
                />
                <ProductVideoText
                    sloganVideoTitle={matchingCategory?.categoryVideo2Slogan}
                    sloganVideoText={matchingCategory?.categoryVideo2Text}
                    title1={matchingCategory?.subtitle2a}
                    text1={matchingCategory?.subtext2a}
                    title2={matchingCategory?.subtitle2b}
                    text2={matchingCategory?.subtext2b}
                />
                <div className={"col-lg-6"}>
                    <video className={"product-video"} muted autoPlay loop>
                        <source src="/src/assets/videos/product-video-seating-2.mp4" />
                        {/* quando uso {matchingCategory?.categoryVideo2} o vídeo deixa de aparecer, deve ter que ver com o tempo que o fetch da context api demora - RESOLVER*/}
                    </video>
                </div>
            </div>
        </section>
    );
};

export default ProductVideos;

//MELHORAR: mudar descrição e vídeos conforme a categoria - fetch - searchURLparameters