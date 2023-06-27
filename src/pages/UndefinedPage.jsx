import React from "react";
import { Link, useParams } from "react-router-dom";
function UndefinedPage() {
  const { errorCode } = useParams();
  return (
    <div
      style={{ height: "86vh" }}
      className="d-flex flex-column col-md-6 d-flex justify-content-center align-items-center gap-4"
    >
      <h1 className="text-warning">{errorCode}</h1>
      <p className="lead">
        Sorry :( The Page You Are Looking For Is Not Available{" "}
      </p>
      <p>
        Continue Your Journey Here{" "}
        <Link className="btn btn-danger mx-3" to={"/"}>
          MainPage
        </Link>{" "}
      </p>
    </div>
  );
}

export default UndefinedPage;
