import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ height: "80vh" }}>
        <div className="text-center mt-3">
          <h1 className="">Welcome to KOLSEA SHIPPING</h1>
          <img
            style={{ width: "300px" }}
            className="mt-4"
            src="https://picsum.photos/200"
            alt=""
          />
          <div>
            <p
              onClick={() => navigate("/Products")}
              className="mt-3 btn btn-warning  cursor-pointer"
            >
              Click this link to see the products...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
