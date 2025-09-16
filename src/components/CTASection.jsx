
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-8">
      {/* <div className="mx-auto  bg-slate-400 px-4 sm:px-6 lg:px-8"> */}
        <div className="lg:py-14 lg:px-32 p-10 bg-gradient-to-r from-[#EFBBCF] to-[#F7D6E0] flex items-center justify-between flex-col lg:flex-row shadow-md mx-auto">
          {/* Left text */}
          <div className="block text-center mb-5 lg:text-left lg:mb-0">
            <h2 className="font-manrope text-4xl text-[#333333] font-semibold mb-5 lg:mb-2">
              Brighten Your Day with Flowers 🌸
            </h2>
            <p className="text-xl text-[#2F5233]">
              Shop the freshest blooms, handpicked for every occasion.
            </p>
          </div>

          {/* CTA button */}
          <button
            onClick={() => navigate("/products")}
            className="flex items-center gap-2 bg-[#2F5233] hover:bg-[#244027] text-white text-lg font-semibold py-4 px-10 transition-all duration-500 shadow-md"
          >
            Shop Now
            <svg
              width={19}
              height={14}
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                stroke="white"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      {/* </div> */}
    </section>
  );
};

export default CTASection;
