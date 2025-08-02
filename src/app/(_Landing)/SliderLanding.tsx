"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import Link from "next/link";
import Container from "@/components/Container";
import Image from "next/image";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

const ASlider = [
  {
    text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
    image: "/images/Slider.png",
    textBtn: "سفارش آنلاین غذا",
    href: "/",
  },
  { text: "غذای سالم و متنوع", image: "/images/Footer.png" },
  {
    text: "ترخینه تجربه غذایی فراموش نشدنی",
    image: "/images/Slider.png",
    textBtn: "شعبه های ترخینه",
    href: "/branch",
  },
  {
    text: "بهترین کیفیت و خوش مزه ترین غذا ها در ترخینه",
    image: "/images/Footer.png",
  },
];

function SliderLanding() {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation, EffectFade]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      effect="fade"
      pagination={{
        clickable: true,
        el: ".custom-pagination-slider",
      }}
      navigation={{
        nextEl: ".custom-next-slider",
        prevEl: ".custom-prev-slider",
      }}
      className="mySwiper"
    >
      {ASlider.map((slider, index) => (
        <SwiperSlide key={`slide-${index}`}>
          <div className="relative">
            <div className="relative w-full md:h-[340px] h-[250px]">
              <Image
                src={slider.image}
                alt={slider.text}
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute md:top-2/4 top-1/3 w-full text-center">
              <Container>
                <h1 className="text-[var(--Gray-2)] md:text-3xl text-2xl">
                  {slider.text}
                </h1>
                {slider.textBtn && (
                  <div className="bg-[var(--Primary)] text-[var(--Gray-2)] text-sm rounded-sm px-3 md:py-4 py-3 w-45 mt-5 mx-auto">
                    <Link href={slider.href} className="text-right w-full">
                      {slider.textBtn}
                    </Link>
                  </div>
                )}
              </Container>
            </div>
          </div>

          {/* next/prev */}
          <div className="custom-next-slider top-1/2 right-6 absolute w-8 h-8 cursor-pointer z-10">
            <ArrowRight2 width={3} color="#fff" />
          </div>
          <div className="custom-prev-slider top-1/2 left-6 absolute w-8 h-8 cursor-pointer z-10">
            <ArrowLeft2 width={3} color="#fff" />
          </div>
        </SwiperSlide>
      ))}

      {/* نقطه های اسلایدر */}
      <div className="absolute left-0 right-0 bottom-0 z-10">
        <div className="relative w-[154px] h-[30px] left-0 right-0 m-auto">
          {/* ظرف svg */}
          <Image src={"/svg/slider-pagination.svg"} fill alt="" />
          {/* نقطه‌ها داخل svg */}
          <div className="custom-pagination-slider absolute inset-0 z-20 flex items-center justify-center"></div>
        </div>
      </div>
    </Swiper>
  );
}

export default SliderLanding;
