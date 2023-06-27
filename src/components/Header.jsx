import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import LOGO from "../assets/LOGO.png";

const Header = () => {
  return (
    <>
      <nav className="navbar text-light navbar-light bg-dark align-center p-3 ">
        <div>
          <img style={{ width: "85px", height: "65px" }} src={LOGO} alt="" />
        </div>
        <div className="">
          <ul className="d-flex gap-5   ">
            <Link to={"/"}>Anasayfa</Link>
            <Link to={"/Products"}>Ürünler</Link>
            <Link to={"/About"}>Hakkımızda</Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
