
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart, setCreatedOrder } = useCart();
  const navigate = useNavigate();

  const cartTotal = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "COD",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    if (!form.name || !form.email || !form.phone || !form.address) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");

    const orderData = {
      customer: form,
      items: cart,
      total: cartTotal,
      shipping: 0,
    };

    try {
      const res = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      let data = null;
      try {
        data = await res.json();
      } catch (parseErr) {
        console.warn("⚠️ Could not parse response as JSON:", parseErr);
      }

      console.log("📦 Raw response status:", res.status);
      console.log("📦 Parsed data:", data);

      if (!res.ok) {
        throw new Error(data?.message || `Server responded with ${res.status}`);
      }

      console.log("✅ Order created successfully");
      setCreatedOrder(data); // ✅ Store in context
      clearCart();
      navigate("/confirmation"); // ✅ Go to confirmation page
    } catch (err) {
      console.error("❌ Order placement failed:", err);
      setError("Something went wrong while placing the order. Please check console logs.");
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FAF9F6]">
        <h2 className="text-2xl font-semibold text-[#333333]">
          Your cart is empty 🛒
        </h2>
        <a
          href="/products"
          className="mt-6 bg-[#A3C9A8] hover:bg-[#96bfa0] text-black px-6 py-3 rounded-full font-medium shadow-md transition"
        >
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <section className="bg-[#FAF9F6] min-h-[80vh] py-12">
         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT SIDE - CUSTOMER INFO */}
         <div className="lg:col-span-2 bg-white shadow-lg rounded-2xl p-6 border border-[#EFBBCF]/30">
<h2 className="text-2xl font-bold text-[#2F5233] mb-6">             Customer Information
      </h2>

       {error && (
            <p className="bg-red-100 text-red-700 p-3 mb-4 rounded-lg text-sm">
              {error}
            </p>
          )}

          <div className="grid grid-cols-1 gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A3C9A8] outline-none" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A3C9A8] outline-none" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A3C9A8] outline-none" />
            <textarea name="address" value={form.address} onChange={handleChange} placeholder="Shipping Address" rows={3} className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A3C9A8] outline-none resize-none"></textarea>

            {/* Payment Method */}
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="paymentMethod" value="COD" checked={form.paymentMethod === "COD"} onChange={handleChange} />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="paymentMethod" value="Card" checked={form.paymentMethod === "Card"} onChange={handleChange} />
                Pay with Card
              </label>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-[#EFBBCF]/30">
          <h3 className="text-2xl font-semibold text-[#2F5233] mb-4">
            Order Summary
          </h3>

          {cart.map((item) => (
            <div key={item._id} className="flex justify-between items-center mb-3">
              <p className="text-gray-700">{item.name} x {item.quantity}</p>
              <span className="font-semibold text-[#333333]">
                Rs {item.price * item.quantity}
              </span>
            </div>
          ))}

          <hr className="my-4 border-[#EFBBCF]/30" />

          <div className="flex justify-between text-lg font-bold text-[#333333]">
            <span>Total</span>
            <span>Rs {cartTotal}</span>
          </div>


      <button
        onClick={handlePlaceOrder}
        className="w-full mt-6 bg-[#2F5233] hover:bg-[#264829] text-white py-3 rounded-full font-medium shadow-md transition"
      >
        Place Order
      </button>
      </div>       </div>
    </section>
  );
}
