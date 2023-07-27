import { useState, useEffect } from "react";

const useFetchProducts = (categoryName) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    // const urlCategory = new URLSearchParams (window.location.search);
    // const clickedCategory = urlCategory.get("category");
    // console.log(clickedCategory);

    fetch("/src/fakeFurnitureStoreApi.json")
      .then((response) => response.json())
      .then((data) => {
        const productsByCategory = data.products.filter(
          (product) => product.categoryName === categoryName
        );
        setProducts(productsByCategory);
      });
  }, [categoryName]);

  console.log (products);
  return { products };
};

export default useFetchProducts;
