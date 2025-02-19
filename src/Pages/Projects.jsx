import React from 'react';
import Hero from '../components/Hero/Hero';

import areas from '../data/projects/areas';

const Projects = () => {
  return (
    <div>
      <Hero
        title={'Projects'}
        description={'Explore the cutting edge research being done'}
      />
      <div className="sectionafterhero">
        <div className="container">
          <div className="row">
            <p className="headerreserach"> Research Areas</p>
            <p className="researchDescHro">
              With the rapid advancement in data acquisition techniques, our lab is at the forefront of addressing the exponential increase in visual data across various domains and modalities, including 2D images, 2D videos, 2D sketches, 2.5D depth images, 3D point clouds, and 3D meshed surfaces.
              We are dedicated to developing cutting-edge approaches for the automatic processing, understanding, and analysis of visual data. These data often exhibit high complexity, significant structural variations, intrinsic imprecision, ambiguity, and are prone to heavy noise and
              incompleteness. For example, cars from different manufacturers may have distinct 3D shape representations, buildings viewed from different angles may appear different in 2D views, and sketches of a horse by different individuals may vary due to experiential and cognitive differences.
            </p>
            <div className="fieldholders">
              {areas.map((item, index) => (
                <div
                  key={index}
                  className="fieldItem">
                  <div className="customCardproj">
                    <div className="cardBodyproj">
                      <img
                        className="tokenImage"
                        src={import.meta.env.BASE_URL+ '/images/'+ item.img}
                        alt="NFT"
                      />
                      <h2>{item.title} </h2>
                      <p className="description">{item.desc}</p>
                      <hr />
                      <div className="pubshowlnk">
                        <p>View Publications</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* end item here  */}
          </div>
        </div>
      </div>
      {/* section end here  */}
    </div>
  );
};

export default Projects;
