"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Keyboard,
  A11y,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";

// ─── Image data ──────────────────────────────────────────────────────────────
const greetingImages: { src: string; alt: string }[] = [
  {
    src: "/22c657febf23ba063df73752ed1e9dc5b203363c.jpg",
    alt: "Appadvent Team – slide 1",
  },
  {
    src: "/heroimg1.jpeg",
    alt: "Appadvent Team – slide 2",
  },
  {
    src: "/heroimg3.jpeg",
    alt: "Appadvent Team – slide 4",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function GreetingCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const handleNext = useCallback(() => swiperRef.current?.slideNext(), []);

  return (
    /**
     * Wrapper keeps the same aspect ratio as the original image (920 x 620)
     * and preserves the existing rounded-[60px] + shadow-lg styling.
     * `relative` is needed so the absolute-positioned overlay buttons stay
     * clamped inside the rounded rectangle.
     */
    <div
      className="w-full relative z-10 rounded-[60px] overflow-hidden shadow-lg"
      style={{ aspectRatio: "4 / 3" }}
      role="region"
      aria-label="Appadvent team image carousel"
    >
      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Keyboard, A11y]}
        loop={true}
        speed={600}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        keyboard={{ enabled: true }}
        grabCursor={true}
        a11y={{
          prevSlideMessage: "Previous team photo",
          nextSlideMessage: "Next team photo",
        }}
        pagination={{
          el: ".greeting-pagination",
          clickable: true,
          bulletClass: "greeting-dot",
          bulletActiveClass: "greeting-dot-active",
        }}
        navigation={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full h-full"
      >
        {greetingImages.map((img, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-contain"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom-centre overlay: dots + prev/next */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none">
        {/* Pagination dots */}
        <div className="greeting-pagination flex gap-2 pointer-events-auto" />

        {/* Navigation buttons */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Prev */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="flex items-center justify-center w-9 h-9 sm:w-[42px] sm:h-[42px] md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-sm text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-black/70 hover:scale-110 hover:shadow-xl active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 md:w-5 md:h-5"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="flex items-center justify-center w-9 h-9 sm:w-[42px] sm:h-[42px] md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-sm text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-black/70 hover:scale-110 hover:shadow-xl active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 md:w-5 md:h-5"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Pagination dot styles — Tailwind cannot target Swiper's dynamic class names */}
      {/* <style>{`
        .greeting-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.5);
          cursor: pointer;
          transition: background 300ms ease, transform 300ms ease;
        }
        .greeting-dot-active {
          background: #ffffff;
          transform: scale(1.3);
        }
      `}</style> */}
    </div>
  );
}
