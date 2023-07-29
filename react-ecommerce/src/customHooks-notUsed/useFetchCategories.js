import { useState, useEffect } from "react";

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/src/fakeFurnitureStoreApi.json")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories));
  }, []);
  console.log (categories);
  return { categories };
};

export default useFetchCategories;

