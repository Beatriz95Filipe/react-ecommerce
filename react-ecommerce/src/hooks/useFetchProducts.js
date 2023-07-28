import { useState, useEffect } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/src/fakeFurnitureStoreApi.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);
  console.log (products);
  return { products };
};

export default useFetchProducts;

