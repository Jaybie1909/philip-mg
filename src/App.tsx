import { Route, Routes } from "react-router-dom";
import About from "./components/pages/about/About";
import Products from "./components/pages/products/Products";
import ProductDetail from "./components/pages/product-detail/ProductDetail";
import ContactUs from "./components/pages/contact-us/ContactUs";
import Home from "./components/pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="">
      {/* header */}
      <Header />
      {/* contents */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product-detail" element={<ProductDetail />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
      </Routes>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
