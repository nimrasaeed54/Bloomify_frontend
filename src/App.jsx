// // App.jsx
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./layouts/Layout";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Products from "./pages/Products";
// import ProductDetail from "./components/ProductDetail";
// import Cart from "./components/Cart";
// import CheckoutPage from "./components/CheckoutPage";
// import OrderConfirmation from "./components/OrderConfirmation";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Layout wraps all pages with Navbar + Footer */}
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="products" element={<Products />} /> {/* renders at "/products" */}
//           <Route path="products/:id" element={<ProductDetail />} />
//           <Route path="cart" element={<Cart />} />
//           <Route path="checkout" element={<CheckoutPage />} />
//           <Route path="confirmation" element={<OrderConfirmation />} />


//           <Route path="contact" element={<Contact />} /> {/* renders at "/contact" */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
