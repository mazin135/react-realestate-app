import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from '../../utils/common';
import SliderButtons from '../SliderButtons/SliderButtons';

const Residencies = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>
        </div>
        <Swiper 

slidesPerView={1}
spaceBetween={10}

breakpoints={{
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 50,
  },
}}
modules={[Pagination]}
className="mySwiper"
               
         >
            <SliderButtons/>
            {
                data.map((card,i)=>(
                    <SwiperSlide key={i}> 
                        <div className="flexColStart r-card">
                            <img src={card.image} alt='home'/>
                            <span className="secondaryText r-price">
                                <span style={{color: "orange"}}>$</span>
                                <span>{card.price}</span>
                            </span>
                            <span className='primaryText'>{card.name}</span>
                            <span className='secondaryText'>{card.detail}</span>

                        </div>

                    </SwiperSlide>
                ))}
            
        </Swiper>
    </section>
  );
};

export default Residencies

