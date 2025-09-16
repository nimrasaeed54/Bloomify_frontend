

import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function OrderConfirmation() {
  const { createdOrder } = useCart();

  if (!createdOrder) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FAF9F6]">
        <h2 className="text-2xl font-bold text-red-600">No order found!</h2>
        <Link
          to="/products"
          className="mt-6 bg-[#A3C9A8] hover:bg-[#96bfa0] text-black px-6 py-3 rounded-full font-medium shadow-md transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#FAF9F6] min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold text-[#2F5233] mb-4">
        🎉 Order Placed Successfully!
      </h1>
      <p className="text-gray-700 text-lg mb-2">
        Thank you <span className="font-semibold">{createdOrder.customer.name}</span>!
        Your order has been confirmed.
      </p>
      <p className="text-gray-500 text-sm mb-6">
        Order ID: <span className="font-mono">{createdOrder._id}</span>
      </p>
      <Link
        to="/products"
        className="bg-[#2F5233] hover:bg-[#264829] text-white px-6 py-3 rounded-full font-medium shadow-md transition"
      >
        Continue Shopping
      </Link>
    </section>
  );
}

