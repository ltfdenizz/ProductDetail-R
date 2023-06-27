import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

import Card from "../components/Card";
const Products = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5200/Product")
      .then((res) => setProducts(res.data));
  }, []);
  if (!products) return "Loading...";
  return (
    <div>
      <h3 className="px-5 mt-3">{products.length} Ürün bulundu...</h3>

      <div className="cards-container">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
