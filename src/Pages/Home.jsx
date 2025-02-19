import React, { useRef, useState } from 'react';

import HomeHero from '../components/Hero/HomeHero';

import featuredPubs from '../data/home/featuredPubs';
import ongoing from '../data/home/ongoing';

import yifang from '../assets/images/prof_yf.jpg';
import labImg from '../assets/images/lab.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Home = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div>
      <HomeHero />

      {/* message from the pi section  */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="messagefromPIContainer">
              <div className="messageHOlder">
                <div className="left-message-image">
                  <img src={yifang} alt="Yifang" />
                </div>
                <div className="right-message-text">
                  <h1>Message from our Principle Investigator</h1>
                  <p>
                    "Welcome to the Embodied AI and Robotics Lab at NYU Tandon
                    School of Engineering. Our lab focuses on developing novel
                    machine learning algorithms for embodied AI, which enables
                    robots to learn and interact with the world in a more
                    human-like manner Welcome to the Embodied AI and Robotics
                    Lab at NYU Tandon School of Engineering. Our lab focuses on
                    developing novel machine learning algorithms for embodied
                    AI, which enables robots to learn and interact with the
                    world in a more human-like manner"
                  </p>

                  <h4>
                    Yi Fang <br />
                    <i>
                      Associate Professor of Electrical and Computer
                      Engineering; Associate Professor of Computer Science
                      (Affiliated) <br />
                      NYUAD
                    </i>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ongoing research projects section  */}

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="aboutLabContainer">
              <h4>Ongoing research</h4>
              <p className="about-section-headdesc">
                Sneak peek into ongoing reseach projects at the lab
              </p>
              <div className="posRel">
                <div className="researchProjCont">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={false}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                  >
                    {ongoing.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="researchProj">
                          <div className="researchProjDesc">
                            <h4>{item.name}</h4>
                            <p>{item.desc}</p>
                            <button className="btn">Read More</button>
                          </div>
                          <div className="researchProjImg">
                            <img
                              src={import.meta.env.BASE_URL+ '/images/' + item.img}
                              alt="Project"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}

                    <div className="autoplay-progress" slot="container-end">
                      <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                      </svg>
                      <span ref={progressContent}></span>
                    </div>
                  </Swiper>
                </div>
              </div>
              <div className="center-button">
                <button className="btn hmpgBtn">View all</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About featured publications  */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="featuredPubContainer">
              <h4>Featured publications</h4>
              <p className="featured-section-headdesc">
                Learn about our latest AI breakthroughs and innovations from our
                library of published papers.
              </p>

              {/* <img src={labImg} alt="Lab" /> */}

              <div className="featuredPublications">
                {/* // make cards  */}

                {featuredPubs.map((item, index) => (
                  <div className="featuredPubCard" key={index}>
                    <div className="featuredPubImg">
                      <img
                        src={import.meta.env.BASE_URL+ '/images/' + item.img}
                        alt="Paper"
                      />
                    </div>
                    <div className="featuredPubDesc">
                      <h4>{item.title}</h4>
                      <p>{item.authors}</p>
                      <p>{item.year}</p>
                      <p>{item.venue}</p>
                    </div>
                  </div>
                ))}

              </div>


              <div className="center-button">
                <button className="btn hmpgBtn">View all</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* About our lab section  */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="aboutLabContainer">
              <h4>About</h4>
              <p className="about-section-headdesc">
                Research Lab located at NYUAD, focused on Embodied AI and
                Robotics
              </p>

              <img src={labImg} alt="Lab" />
              <p>
                The Embodied AI and Robotics Lab at NYU Tandon School of
                Engineering focuses on developing novel machine learning
                algorithms for embodied AI, which enables robots to learn and
                interact with the world in a more human-like manner. Our lab
                aims to bridge the gap between perception and action in
                autonomous systems by developing algorithms that allow robots to
                learn from their own experiences and interact with the world in
                a more human-like manner
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        {/* <div className="contrelative">
          <div className="bgcolor1">
            test
            <span>test2</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
