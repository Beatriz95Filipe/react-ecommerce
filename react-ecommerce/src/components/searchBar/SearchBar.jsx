import { Link } from "react-router-dom";

import style from "./style.module.scss";
import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_thumbnails.scss";

import useFetchCategories from "../../hooks/useFetchCategories";
import useFetchProducts from "../../hooks/useFetchProducts";
import { useParams } from "react-router-dom";

const SearchBar = ({ keyId, linkTo, imgSrc, imgAlt, hoverSrc, hoverAlt, itemName, itemPrice }) => {

  const { categoryName } = useParams();
  //console.log(categoryName);

  const { categories } = useFetchCategories();
  const clickedCategory = categories.find(
    (category) => category.categoryName === categoryName
  );

  const { products } = useFetchProducts(categoryName);
  //console.log(products);

  // const createSearchBar = products.map((product) => (
  //   productName={product.name}
  //   productImg={product.imageSrc}
  //   productLink={`/product/${product.name}`}
  // ));

  // let searchProductsInput = document.getElementById("searchProductsInput");
  // let searchResultsContainer = document.getElementById("searchResults");
  
  // searchProductsInput.onkeyup = (searchInput) => {
  //     let searchedProduct = searchInput.target.value.toLowerCase();
  //     let matchingProducts = [];

  //     for (let i = 0; i < products.length; i++) {
  //         if (productTitle[i].includes(searchedProduct) || productDescription[i].includes(searchedProduct)) {
  //             matchingProducts.push(products[i]);
  //         }
  //     }
  //     displaySearchResults(matchingProducts, searchedProduct);
  // }

  // const displaySearchResults = (matchingProducts, searchedProduct) => {
  //   let searchProductsInput = document.getElementById("searchProductsInput");

  //   let searchResultsContainer = document.getElementById("searchResults");
  //   searchResultsContainer.innerHTML = "";

  //   if (matchingProducts.length === 0) {
  //       searchResultsContainer.innerHTML +=
  //           `<div class="searchResultItem">
  //               <p>It seems we can't find what you are looking for...</p>
  //           </div>`;
  //   } else if (searchedProduct.length === 0) {
  //       searchResultsContainer.innerHTML +=
  //           `<div class="searchResultItem"></div>`;
  //   } else {
  //       matchingProducts.forEach((product) => {
  //       searchResultsContainer.innerHTML +=
  //           `<div class="searchResultItem">
  //               <p>${product.title}</p>
  //               <img src="${product.image}">
  //           </div>`;
  //       });
  //   }
  // }

  return (
    <div className={style.searchProducts}>
        <input type="text" id="searchProductsInput" placeholder="Find your product" name="searchField" />
        <div id="searchResults" className="searchResults"></div>
    </div>
  );
};

export default SearchBar;