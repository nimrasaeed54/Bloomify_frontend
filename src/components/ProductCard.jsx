
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useCart } from '../context/CartContext';
export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const stars = Math.round(product.rating);
  const navigate = useNavigate(); 
  const { addToCart } = useCart();
  return (
    <div 
   onClick={() => navigate(`/products/${product._id}`)}

      className="cursor-pointer"
    >
      <div 
        className="relative w-full max-w-xs bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Wishlist Button */}
        <button 
          className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all duration-300 ${
            isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-400'
          } shadow-md hover:scale-110`}
          onClick={(e) => {
            e.stopPropagation(); // ✅ Prevent navigation when clicking heart
            setIsLiked(!isLiked);
          }}
          aria-label="Add to wishlist"
        >
          <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
        </button>

        {/* Product Image Container */}
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center w-full h-56 bg-gradient-to-br from-gray-50 to-gray-100 p-4">
            <img
              className={`h-44 object-contain transition-transform duration-500 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
              src={product.image}
              alt={product.name}
            />
          </div>
          
          {/* Quick View Overlay */}
          <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <button 
              className="bg-white text-gray-800 px-4 py-2 rounded-full flex items-center font-medium hover:bg-gray-50 transition-colors"
              onClick={(e) => {
                e.stopPropagation(); // ✅ Prevent navigation
                console.log("Quick view clicked");
              }}
            >
              <Eye size={16} className="mr-1" />
              Quick View
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5">
          {/* Category */}
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            {product.category}
          </p>
          
          {/* Product Name */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 h-14">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${i < stars ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm font-medium text-gray-600">
              ({product.rating.toFixed(1)})
            </span>
          </div>

          {/* Price & Button */}
          <div className="flex items-center justify-between mt-4">
            <div>
              <span className="text-2xl font-bold text-gray-900">Rs {product.price}</span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  Rs {product.originalPrice}
                </span>
              )}
            </div>
             <button
      className="bg-[#A3C9A8] hover:bg-[#9dc9a3] text-black px-4 py-2 rounded-lg flex items-center transition-colors font-medium"
      onClick={(e) => {
        e.stopPropagation();
        addToCart(product); 
      }}
    >
      <ShoppingCart size={18} className="mr-1" />
    </button>
          </div>
        </div>
      </div>
    </div>
  );
}
