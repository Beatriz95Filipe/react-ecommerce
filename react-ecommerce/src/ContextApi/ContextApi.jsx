import React, { createContext, useState, useEffect } from "react";

const ContextApi = createContext();

const AppProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/src/fakeFurnitureStoreApi.json")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
        setProducts(data.products);
      });
  }, []);

  return (
    <ContextApi.Provider value={{ categories, products }}>
      {children}
    </ContextApi.Provider>
  );
};

export { ContextApi, AppProvider };