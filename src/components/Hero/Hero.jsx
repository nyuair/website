import React, { useRef } from 'react';
import './Hero.css';

import ongoing from '../../data/home/ongoing';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="heromainContents">
        <div className="container fromTopHer">
          <div className="hero-text alignCenter">
            <p className="herotltle">{props.title}</p>
            <p>{props.description}</p>
          </div>
        </div>
        <div className="faintOverlayEnder">
          <div className="container">
            <div className="row">
              <p className="ongoingRhr"> Ongoing research</p>

              <Swiper
                slidesPerView={3}
                spaceBetween={0}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false
                }}
                pagination={false}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper">
                {ongoing.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="researchCardCont">
                      <div className="researchCardhero">
                        <div className="cardimghero">
                          <img
                            src={import.meta.env.BASE_URL+ '/images/' + item.img}
                            alt="Project"
                          />
                        </div>
                        <div className="researchDeschero">
                          <p className="main">{item.name}</p>
                          <p className="desc">{item.desc}</p>
                          {/* <p>{item.desc}</p> */}
                          <button className="btn">Learn More</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
