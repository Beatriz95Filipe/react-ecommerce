import { Link } from "react-router-dom";

import style from "./style.module.scss";
import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_thumbnails.scss";

import useFetchCategories from "../../hooks/useFetchCategories";
import useFetchProducts from "../../hooks/useFetchProducts";
import { useParams } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {

  const { categoryName } = useParams();
  //console.log(categoryName);

  // const { categories } = useFetchCategories();
  // const clickedCategory = categories.find(
  //   (category) => category.categoryName === categoryName
  // );

  const { products } = useFetchProducts(categoryName);
  //console.log(products);

  const [matchingProducts, setMatchingProducts] = useState([]);

  const handleSearchInput = (searchInput) => { //devia escrever sempre (event)???
    const searchedProduct = searchInput.target.value.toLowerCase();
    if(searchedProduct === "") {
      setMatchingProducts([]);
    } else {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchedProduct)
      );
      setMatchingProducts(filteredProducts);
    }
  };

  const searchResults = matchingProducts.map((product) => (
    <div className="searchResultItem">
      <Link to={`/product/${product.id}`}>{product.name}</Link>
    </div>
  ));

  // let searchContent;
  // if (matchingProducts.length === 0 && searchedProduct !== 0) {
  //   searchContent = (
  //     <div className="searchResultItem">
  //       <p>It seems we can't find what you are looking for...</p>
  //     </div>
  //   );
  // } else {
  //   searchContent = searchResults;
  // }
  //aparecer mensagem de erro quando não há matchs (mas há alguma coisa escrita!)

  return (
    <div className={style.searchProducts}>
        <input type="text" id="searchProductsInput" placeholder="Find your product" name="searchField" onKeyUp={handleSearchInput}/>
        <div id="searchResults" className="searchResults">{searchResults}</div>
    </div>
  );
};

export default SearchBar;