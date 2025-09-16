import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Star, Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity); // ✅ Add product first
    navigate("/cart"); // ✅ Redirect to cart after adding
  };


  // ✅ Fetch product safely
  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`);

        if (!res.ok) throw new Error(`Product not found (status: ${res.status})`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product", err);
        setError("Product not found or server error.");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-gray-600 text-lg animate-pulse">
          Loading product...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-red-500 text-lg font-medium">{error}</p>
      </div>
    );
  }

  if (!product) return null; // just in case

  const stars = Math.round(product.rating || 0);

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl  sm:px-2  lg:px- grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="flex justify-center items-center">
          <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-2xl object-contain max-h-[500px] w-full"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          {/* Title + Wishlist */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
              <p className="text-gray-500 text-sm mt-1 uppercase">
                {product.category}
              </p>
            </div>
            <button
              className={`p-2 rounded-full transition-all duration-300 ${isLiked ? "bg-red-500 text-white" : "bg-gray-100 text-gray-500"
                } shadow-md hover:scale-110`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
            </button>
          </div>

          {/* Rating */}
          <div className="flex items-center mt-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className={`${i < stars ? "text-yellow-400" : "text-gray-300"
                  } fill-current`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              ({product.rating?.toFixed(1) || "0.0"})
            </span>
          </div>

          {/* Price */}
          <div className="mt-4">
            <span className="text-3xl font-bold text-gray-900">
              Rs {product.price}
            </span>
            {product.originalPrice && (
              <span className="ml-3 text-gray-500 line-through text-lg">
                Rs {product.originalPrice}
              </span>
            )}
          </div>
          {/* Description */}
          {product.description && (
            <p className="mt-6 text-gray-600 leading-relaxed">
              {product.description}
            </p>
          )}
          {/* Extra Info */}
          <div className="mt-6 space-y-2 text-sm text-gray-700">
            <p><span className="font-medium">Availability:</span>
              <span className={`ml-2 ${product.countInStock > 0 ? "text-green-600" : "text-red-500"}`}>
                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </p>
            <p><span className="font-medium">Delivery:</span> 2–3 business days</p>
            <p><span className="font-medium">Packaging:</span> Hand-tied bouquet</p>
          </div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 bg-[#A3C9A8] hover:bg-[#96bfa0] text-black px-6 py-3 rounded-full font-medium shadow-md transition"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium shadow-md transition"
            >
              Buy Now
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
