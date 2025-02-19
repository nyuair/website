import React from 'react';
import './Hero.css';
import HomeVideo from '../../assets/videos/homevid.mp4';

const HomeHero = () => {
  return (
    <div className="hero">
      <video src={HomeVideo} autoPlay loop muted></video>
      <div className="hero-contents container">
        <div className="hero-text">
          <h1>
            NYU Embodied <span className=''>AI</span> <br />
            and Robotics Lab
          </h1>
          <p>Explore the cutting edge research being done at the lab.</p>
          <button className="btn">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
