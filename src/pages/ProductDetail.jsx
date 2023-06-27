import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProductDetail = ({ data }) => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [detail, SetDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5200/Product/${productId}`)
      .then((res) => SetDetail(res.data))
      .catch((err) => navigate(`/undefined/${err?.response?.status}`));
  }, []);
  if (detail === null) return "Loading...";
  return (
    <div
      style={{ height: "85vh" }}
      className="row justify-content-center align-items-center"
    >
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
        <img className="rounded shadow" src={detail.image} alt="" />{" "}
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
        <h3>{detail.title}</h3>
        <p>{detail.About}</p>
        <b>{detail.price} $</b>
      </div>
    </div>
  );
};

export default ProductDetail;
