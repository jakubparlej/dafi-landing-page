import React from "react";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import image1 from "../../assets/butelka-image1.jpg";
import image2 from "../../assets/butelka-image2.jpg";
import image3 from "../../assets/butelka-image3.jpg";

SwiperCore.use([Navigation, Autoplay, A11y]);

function Slider() {
  return (
    <div className="slider section__margin">
      <h2>Butelka Dafi zawsze pod ręką</h2>
      <Swiper
        className="slider__container"
        navigation
        modules={[Navigation, Autoplay, A11y]}
        spaceBetween={24}
        slidesPerView={"auto"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
      >
        <SwiperSlide className="slider__slide">
          <img src={image1} alt="Butelka filtrująca 1" />
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <img src={image2} alt="Butelka filtrująca 2" />
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <img src={image3} alt="Butelka filtrująca 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
