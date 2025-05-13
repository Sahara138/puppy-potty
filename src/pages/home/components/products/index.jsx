import React, { useRef } from "react";
import { productData } from "./productData";
import ProductCard from "./ProductCard";
import GlobalContainer from "@/components/globalcontainer";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./style.css";

const Products = () => {
  const swiperRef = useRef(null);
  return (
    <GlobalContainer>
      <section className="mt-[118px]">
        <div className="text-center">
          <h4 className="font-manjari text-[24px] font-normal text-black-03">
            Supplies
          </h4>
          <h5 className="mt-[10px] font-poppins text-[30px] font-semibold leading-[44px] capitalize text-black-01 max-w-[379px] mx-auto">
            Pick Our Products
          </h5>
        </div>
        <div className="relative mt-[73px]">
          <div className="swiper-button-prev absolute top-1/2 -left-40 -translate-y-[50%] z-10 cursor-pointer">
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-[50px] h-[50px] border border-[#F9CE3B] font-bold rounded-full flex justify-center items-center hover:bg-[#ffffff] hover:border-none hover:shadow-2xl"
            >
              <IoChevronBack size={25} color="#F9CE3B" className="font-bold" />
            </div>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            autoplay={true}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            modules={[Pagination, Autoplay, Navigation]}
          >
            {productData.map((product, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProductCard product={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper-button-next absolute top-1/2 -right-40 -translate-y-[50%] z-10 cursor-pointer">
            <div 
            onClick={() => swiperRef.current?.slideNext()}
            className="w-[50px] h-[50px] border border-[#F9CE3B] font-bold rounded-full flex justify-center items-center hover:bg-[#ffffff] hover:border-none hover:shadow-2xl">
              <IoChevronForward
                size={25}
                color="#F9CE3B"
                className="font-bold"
              />
            </div>
          </div>
        </div>
      </section>
    </GlobalContainer>
  );
};

export default Products;
