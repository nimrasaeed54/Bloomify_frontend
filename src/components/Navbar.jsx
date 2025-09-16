
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext"; // ✅ Import the cart context

// Reusable NavLink
const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-base font-normal text-[#333333] hover:text-[#C7B8EA] transition tracking-wide"
  >
    {children}
  </Link>
);

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { cart } = useCart(); // ✅ Get cart state from context

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Count total items in cart
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FAF9F6]/90 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1
          className="text-xl md:text-2xl font-semibold tracking-wide"
          style={{ color: "#EFBBCF", fontFamily: "cursive" }}
        >
          Bloomify
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-5">
          {/* Search */}
          <div className="relative">
            {searchOpen ? (
              <input
                autoFocus
                type="text"
                placeholder="Search..."
                className="px-4 py-1.5 rounded-full border border-[#A3C9A8] focus:outline-none focus:ring-2 focus:ring-[#A3C9A8]/50 transition text-sm w-44"
                onBlur={() => setSearchOpen(false)}
              />
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full hover:bg-[#2F5233]/10 transition"
              >
                <Search className="h-5 w-5 text-[#2F5233]" />
              </button>
            )}
          </div>

          {/* ✅ Cart Button (Links to Cart Page + Badge) */}
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-[#2F5233]/10 transition">
            <ShoppingCart className="h-6 w-6 text-[#2F5233]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-[#FAF9F6]/95 backdrop-blur shadow px-6 py-4 space-y-4">
          <NavLink to="/" onClick={() => setMobileMenu(false)}>Home</NavLink>
          <NavLink to="/products" onClick={() => setMobileMenu(false)}>Products</NavLink>
          <NavLink to="/#funfacts" onClick={() => setMobileMenu(false)}>Fun Facts</NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenu(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
