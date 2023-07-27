import React from "react";
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/services/services";
import Forher from "./components/services/Forher";
import Forhim from "./components/services/Forhim";
import Hair from "./components/services/Hair";
import Makeup from "./components/services/makeup";
import Skin from "./components/services/Skin";
import Body from "./components/services/Body"
import ProductsPage from "./components/Productspage";
import ProductDetails from "./components/ProductDetails";
import AdminRoute from "./adminUI/routes/AdminRoute";
import AdminDashboard from "./adminUI/AdminDashboard";
import CreateCategory from "./adminUI/CreateCategory";
import CreateProduct from "./adminUI/CreateProduct";
import UpdateProduct from "./adminUI/UpdateProduct";
import Products from "./adminUI/Products";
import Login from "./adminUI/Login";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  // const location = useLocation();
  return (
    <AnimatePresence>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services/her" element={<Forher />} />
        <Route path="/services/him" element={<Forhim />} />
        <Route path="/services/hair" element={<Hair />} />
        <Route path="/services/makeup" element={<Makeup />} />
        <Route path="/services/skin" element={<Skin />} />
        <Route path="/services/body" element={<Body />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
        </Route>
        <Route path="*" element={"Page Not Found!!!"} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
