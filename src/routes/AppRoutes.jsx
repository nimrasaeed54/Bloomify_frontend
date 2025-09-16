// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";
import CheckoutPage from "../components/CheckoutPage";
import OrderConfirmation from "../components/OrderConfirmation";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="confirmation" element={<OrderConfirmation />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
