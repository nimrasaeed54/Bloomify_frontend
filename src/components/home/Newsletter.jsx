
import React from "react";

export default function Newsletter() {
  return (
    <section className="relative py-12 bg-[#F7D6E0] overflow-hidden">
      <div className="max-w-3xl mx-auto text-center px-6">
   
        <span className="uppercase tracking-widest text-sm text-[#A3C9A8] font-medium">
          Newsletter
        </span>
        <h2 className="text-4xl font-bold text-[#333] mt-2 mb-3">
          Stay in Bloom
        </h2>
        <p className="text-lg font-semibold text-[#2F5233] mb-4">
          Fresh flowers, delivered with love
        </p>
        <p className="text-[#555] max-w-2xl mx-auto mb-2">
          Get inspired with fresh floral ideas, tips, and exclusive deals.  
        </p>
        <p className="text-[#555] max-w-2xl mx-auto mb-6">
          Plus, enjoy <span className="text-[#2F5233] font-semibold">10% off</span> your first order 
          when you sign up today.
        </p>
        <form className="flex flex-col items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#EFBBCF] outline-none"
          />
          <button
            type="submit"
            className="bg-[#2F5233] hover:bg-[#244026] text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Subscribe
          </button>
        </form>
      </div>
      <img
       src="/images/orchid.png"
        alt="Floral decoration"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-56 opacity-80"
      />
      <img
        src="/images/orchid.png"
        alt="Floral decoration"
        className="absolute right-0 bottom-0 w-36 transform scale-x-[-1] opacity-80"
      />
    </section>
  );
}
