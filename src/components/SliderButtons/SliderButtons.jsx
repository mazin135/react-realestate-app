import React from 'react';
import "./SliderButtons.css";
import { useSwiper } from "swiper/react";

export default function SliderButtons(){
    const swiper = useSwiper();
  return (
    <div className=' flexCenter r-buttons'>
        <button onClick={()=> swiper.slidePrev()}>&lt;</button>
         <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  );
}

