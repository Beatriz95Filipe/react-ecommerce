import { useState, useEffect } from "react";

const getCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const request = await fetch("/src/fakeFurnitureStoreApi.jsx");
        const data = await request.json();
        setCategories(data.categoriesData);
        console.log(setCategories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  console.log(categories);
  return { categories };
};

export default getCategories;

