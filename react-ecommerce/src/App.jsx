import { useEffect, useState } from "react";
import Homepage from "./routes/Homepage/Homepage";
import CategoryPage from "./routes/CategoryPage/CategoryPage";
import ProductPage from "./routes/ProductPage/ProductPage";
import "./styles.scss";

export default function App() {
  const [route, setRoute] = useState("homepage");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get("page");
    if (page) setRoute(page);
  }, []);

  //para criarmos rotas, usamos uma biblioteca externa "react-router-dom"

  return (
    <div className="App">
      <Homepage />
      <CategoryPage />
      <ProductPage />
    </div>
  );
}