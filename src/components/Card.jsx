import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div>
      <div style={{ width: "12rem" }} className="card m-5 d-flex aslan">
        <img className="rounded" src={product.image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.About}</p>
          <Link
            to={`/Products-detail/${product.id}`}
            className="btn btn-primary"
          >
            Ürün Detayları...
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
