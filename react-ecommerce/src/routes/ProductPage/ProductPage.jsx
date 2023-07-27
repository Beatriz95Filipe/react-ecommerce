import ChoosenProduct from "../../components/ProductPage/ChoosenProduct/ChoosenProduct.jsx";
import ProductSpecs from "../../components/ProductPage/ProductSpecs.jsx";
import ProductAbout from "../../components/ProductPage/ProductAbout/ProductAbout.jsx";
import ProductKeyFeatures from "../../components/ProductPage/ProductKeyFeatures/ProductKeyFeatures.jsx";
import ProductVideos from "../../components/ProductPage/ProductVideos/ProductVideos.jsx";
import RelatedProducts from "../../components/ProductPage/RelatedProducts/RelatedProducts";

const ProductPage = () => {
  return (
    <>
      <ChoosenProduct />
      <ProductSpecs
        imgSrc="/src/assets/products/seating/product-dimensions.png"
      />
      <ProductAbout />
      <ProductKeyFeatures />
      <ProductVideos />
      <RelatedProducts />
    </>
  );
};

export default ProductPage;