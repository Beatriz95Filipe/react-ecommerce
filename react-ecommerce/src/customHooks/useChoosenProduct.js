import { useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import { ContextApi } from "../ContextApi/ContextApi"; 

const useChoosenProduct = () => {
    
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

    return { choosenProduct, matchingCategory };
}

export default useChoosenProduct;
  