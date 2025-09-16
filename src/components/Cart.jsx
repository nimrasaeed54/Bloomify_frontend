import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import CheckoutPage from "./CheckoutPage";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, incrementQty, decrementQty, removeFromCart } = useCart();
const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty 🛒</h2>
        <Link
          to="/products"
          className="px-6 py-3 bg-[#A3C9A8] text-black rounded-xl hover:bg-[#9dc9a3] transition"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow border"
          >
            {/* Product Image + Name */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500">Rs {item.price}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => decrementQty(item._id)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <Minus size={16} />
              </button>
              <span className="text-lg font-semibold">{item.qty}</span>
              <button
                onClick={() => incrementQty(item._id)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Subtotal + Remove */}
            <div className="flex items-center gap-4">
              <p className="text-lg font-bold">
                Rs {(item.price * item.qty).toLocaleString()}
              </p>
              <button
                onClick={() => removeFromCart(item._id)}
                className="p-2 text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total & Checkout */}
      <div className="mt-8 flex justify-between items-center border-t pt-4">
        <h2 className="text-xl font-bold">
          Total: Rs {total.toLocaleString()}
        </h2>
        <button
          onClick={() => navigate("/checkout")}
          className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-800"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
// import { useCart } from "../context/CartContext";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Checkout() {
//   const { cart, clearCart } = useCart();
//   const navigate = useNavigate();

//   // 👇 Instead of recalculating, use total from cart if you've already stored it there
//   const cartTotal = cart.reduce(
//     (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
//     0
//   );

//   // Form State
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     paymentMethod: "COD",
//   });

//   // Error State (instead of alerts)
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handlePlaceOrder = async () => {
//     // Validation
//     if (!form.name || !form.email || !form.phone || !form.address) {
//       setError("Please fill in all required fields.");
//       return;
//     }
//     setError("");

//     const orderData = {
//       customer: form,
//       items: cart,
//       total: cartTotal,
//     };

//     try {
//       const res = await fetch("http://localhost:5000/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       if (!res.ok) throw new Error("Failed to place order.");
//       clearCart();
//       navigate("/order-confirmation");
//     } catch (err) {
//       setError("Something went wrong while placing the order. Please try again.");
//     }
//   };

//   if (cart.length === 0) {
//     return (
//       <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FAF9F6]">
//         <h2 className="text-2xl font-semibold text-[#333333]">
//           Your cart is empty 🛒
//         </h2>
//         <a
//           href="/products"
//           className="mt-6 bg-[#A3C9A8] hover:bg-[#96bfa0] text-black px-6 py-3 rounded-full font-medium shadow-md transition"
//         >
//           Continue Shopping
//         </a>
//       </div>
//     );
//   }

//   return (
//     <section className="bg-[#FAF9F6] min-h-[80vh] py-12">
//       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
//         {/* LEFT SIDE - CUSTOMER INFO */}
//         <div className="lg:col-span-2 bg-white shadow-lg rounded-2xl p-6 border border-[#EFBBCF]/30">
//           <h2 className="text-2xl font-bold text-[#2F5233] mb-6">
//             Customer Information
//           </h2>

//           {error && (
//             <p className="bg-red-100 text-red-700 p-3 mb-4 rounded-lg text-sm">
//               {error}
//             </p>
//           )}

//           <div className="grid grid-cols-1 gap-4">
//             <input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Full Name"
//               className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A3C9A8] outline-none"
//             />
//             <input
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A3C9A8] outline-none"
//             />
//             <input
//               name="phone"
//               value={form.phone}
//               onChange={handleChange}
//               placeholder="Phone Number"
//               className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A3C9A8] outline-none"
//             />
//             <textarea
//               name="address"
//               value={form.address}
//               onChange={handleChange}
//               placeholder="Shipping Address"
//               rows={3}
//               className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A3C9A8] outline-none resize-none"
//             ></textarea>

//             {/* Payment Method */}
//             <div className="flex gap-4 mt-2">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="paymentMethod"
//                   value="COD"
//                   checked={form.paymentMethod === "COD"}
//                   onChange={handleChange}
//                 />
//                 Cash on Delivery
//               </label>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="paymentMethod"
//                   value="Card"
//                   checked={form.paymentMethod === "Card"}
//                   onChange={handleChange}
//                 />
//                 Pay with Card
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE - ORDER SUMMARY */}
//         <div className="bg-white shadow-lg rounded-2xl p-6 border border-[#EFBBCF]/30">
//           <h3 className="text-2xl font-semibold text-[#2F5233] mb-4">
//             Order Summary
//           </h3>

//           {cart.map((item) => (
//             <div
//               key={item._id}
//               className="flex justify-between items-center mb-3"
//             >
//               <p className="text-gray-700">
//                 {item.name} x {item.quantity}
//               </p>
//               <span className="font-semibold text-[#333333]">
//                 Rs {item.price * item.quantity}
//               </span>
//             </div>
//           ))}

//           <hr className="my-4 border-[#EFBBCF]/30" />

//           <div className="flex justify-between text-lg font-bold text-[#333333]">
//             <span>Total</span>
//             <span>Rs {cartTotal}</span>
//           </div>

//           <button
//             onClick={handlePlaceOrder}
//             className="w-full mt-6 bg-[#2F5233] hover:bg-[#264829] text-white py-3 rounded-full font-medium shadow-md transition"
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
