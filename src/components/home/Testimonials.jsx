
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ayesha R.",
    role: "Bride",
    rating: "5.0",
    review:
      "BloomNear made my wedding unforgettable 💐 The bouquets were fresh, fragrant, and arranged beautifully. Guests kept asking where they were from!",
    img: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Omar K.",
    role: "Event Planner",
    rating: "4.9",
    review:
      "I’ve used BloomNear for multiple events, and they never disappoint. Timely delivery, stunning floral arrangements, and always reliable. 🌸",
    img: "https://i.pravatar.cc/100?img=33",
  },
  {
    name: "Sana L.",
    role: "Regular Customer",
    rating: "4.8",
    review:
      "I love surprising my mom with flowers, and BloomNear makes it so easy. The packaging is elegant, and the flowers last for days! 🌷",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Ali H.",
    role: "Corporate Client",
    rating: "4.9",
    review:
      "Our office receptions look amazing thanks to BloomNear. The floral decor instantly brightens the atmosphere — clients love it!",
    img: "https://i.pravatar.cc/100?img=20",
  },
  {
    name: "Mariam T.",
    role: "Gift Buyer",
    rating: "5.0",
    review:
      "BloomNear is my go-to for birthdays 🎉 The personalized bouquets always bring a smile to my friends’ faces. Highly recommend!",
    img: "https://i.pravatar.cc/100?img=5",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm text-[#A3C9A8] font-medium block mb-2">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#333]">
            What our happy customers say
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={32}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="group bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-[#EFBBCF] hover:shadow-md h-full flex flex-col justify-between">
                {/* Rating */}
                <div className="flex items-center mb-5 gap-2 text-[#EFBBCF]">
                  ⭐ <span className="text-base font-semibold">{t.rating}</span>
                </div>

                {/* Review */}
                <p className="text-base text-gray-600 leading-6 pb-6 group-hover:text-gray-800 flex-grow">
                  {t.review}
                </p>

                {/* User */}
                <div className="flex items-center gap-4 border-t border-gray-200 pt-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover border-2 border-[#EFBBCF]"
                  />
                  <div>
                    <h5 className="text-[#2F5233] font-medium">{t.name}</h5>
                    <span className="text-sm text-gray-500">{t.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
