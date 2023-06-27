import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Products from "./pages/Products";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import UndefinedPage from "./pages/UndefinedPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Products" element={<Products />} />
        <Route
          path="/Products-detail/:productId"
          element={<ProductDetail />}
        />{" "}
        <Route path="/undefined/:errorCode" element={<About />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<UndefinedPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
