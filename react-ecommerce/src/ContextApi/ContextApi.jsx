import React, { createContext, useState, useEffect } from "react";

const ContextApi = createContext();

const AppProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("/src/fakeFurnitureStoreApi.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCategories(data.categories);
  //       setProducts(data.products);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/fakeFurnitureStoreApi.json");
        const data = await response.json();
        setCategories(data.categories);
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContextApi.Provider value={{ categories, products }}>
      {children}
    </ContextApi.Provider>
  );
};

export { ContextApi, AppProvider };