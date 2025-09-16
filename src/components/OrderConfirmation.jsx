// import { useLocation, Link } from "react-router-dom";

// export default function OrderConfirmation() {
//   const location = useLocation();
//   const order = location.state?.order;

//   if (!order) {
//     return (
//       <div className="min-h-[70vh] flex flex-col items-center justify-center">
//         <h2 className="text-xl font-semibold text-gray-700">
//           No order found 😢
//         </h2>
//         <Link
//           to="/products"
//           className="mt-6 bg-[#A3C9A8] hover:bg-[#96bfa0] px-6 py-3 rounded-full font-medium shadow-md transition"
//         >
//           Continue Shopping
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <section className="py-20 bg-[#FAF9F6]">
//       <div className="w-full max-w-6xl px-4 mx-auto">
//         <div className="flex flex-col items-center gap-10">
//           {/* ✅ Header */}
//           <div className="text-center">
//             <h2 className="text-3xl font-bold text-[#2F5233]">
//               {order.customer?.name}, Thank You for Your Order! 🎉
//             </h2>
//             <p className="text-gray-500 text-lg mt-2">
//               Order ID: #{order.id || "N/A"} / Date:{" "}
//               {new Date().toLocaleDateString()}
//             </p>
//           </div>

//           {/* ✅ Order Items */}
//           <div className="w-full flex flex-col gap-8">
//             <h3 className="text-2xl font-bold text-[#2F5233]">
//               Order Details
//             </h3>

//             <div className="flex flex-col gap-5">
//               {order.items.map((item) => (
//                 <div
//                   key={item._id}
//                   className="grid grid-cols-12 px-6 pb-5 border-b border-gray-300 md:gap-8 gap-3"
//                 >
//                   <div className="lg:col-span-4 md:col-span-5 col-span-12 flex gap-4 items-center">
//                     <div>
//                       <h4 className="text-gray-900 text-lg font-medium">
//                         {item.name}
//                       </h4>
//                       <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
//                     </div>
//                   </div>

//                   <div className="lg:col-span-8 md:col-span-7 col-span-12 flex justify-between">
//                     <p className="text-gray-500 text-lg">Rs {item.price}</p>
//                     <p className="text-gray-900 text-lg font-semibold">
//                       Rs {item.price * item.quantity}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* ✅ Summary */}
//             <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-5">
//               <div className="flex justify-between">
//                 <span className="text-gray-500 text-lg">Subtotal</span>
//                 <span className="text-gray-900 font-semibold text-lg">
//                   Rs {order.total}
//                 </span>
//               </div>
//               <div className="flex justify-between border-b pb-4">
//                 <span className="text-gray-500 text-lg">Shipping</span>
//                 <span className="text-gray-900 font-semibold text-lg">
//                   Rs {order.shipping || 0}
//                 </span>
//               </div>
//               <div className="flex justify-between text-xl font-bold text-[#2F5233]">
//                 <span>Total</span>
//                 <span>Rs {order.total + (order.shipping || 0)}</span>
//               </div>
//             </div>

//             {/* ✅ Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-end">
//               <Link
//                 to="/products"
//                 className="px-5 py-3 bg-[#F7D6E0] hover:bg-[#EFBBCF] rounded-xl text-[#2F5233] font-semibold transition"
//               >
//                 Continue Shopping
//               </Link>
//               <Link
//                 to="/"
//                 className="px-5 py-3 bg-[#2F5233] hover:bg-[#264829] rounded-xl text-white font-semibold transition"
//               >
//                 Go to Homepage
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


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

