import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F6] text-[#333333] border-t border-[#C7B8EA]/40 mt-12">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* Left: Brand Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#EFBBCF] tracking-wide">
            Bloomify 
          </h2>
          <p className="text-sm text-[#666] mt-1">
            Your floral happiness, delivered fresh.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="flex justify-center space-x-6 text-sm font-medium">
          <a href="/" className="hover:text-[#2F5233] transition-colors">Home</a>
          <a href="/products" className="hover:text-[#2F5233] transition-colors">Products</a>
          <a href="/privacy" className="hover:text-[#2F5233] transition-colors">Privacy Policy</a>
          <a href="/contact" className="hover:text-[#2F5233] transition-colors">Contact Us</a>
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex justify-center md:justify-end space-x-3">
          {[
            { icon: <Facebook className="w-4 h-4" />, link: "https://facebook.com" },
            { icon: <Instagram className="w-4 h-4" />, link: "https://instagram.com" },
            { icon: <Twitter className="w-4 h-4" />, link: "https://twitter.com" },
            { icon: <Linkedin className="w-4 h-4" />, link: "https://linkedin.com" }
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#EFBBCF] hover:bg-[#F7D6E0] text-[#2F5233] shadow-md transition"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#C7B8EA]/30 mx-auto max-w-7xl"></div>

      {/* Copyright */}
      <div className="text-center text-sm text-[#666] py-4">
        © {new Date().getFullYear()} Bloomify. All rights reserved.
      </div>
    </footer>
  );
}
