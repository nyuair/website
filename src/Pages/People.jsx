import React, { useEffect } from 'react';
import allPeople from '../data/people/allpeople';
import piImage from '../assets/images/prof_yf.jpg';

import { SiGooglescholar } from 'react-icons/si';
import { Link } from 'react-router-dom';

const People = () => {
  useEffect(() => {
    // apply the css element here
    const style = document.createElement('style');
    style.innerHTML = `
      nav {
        padding: 4px 0;
        border-bottom: 1px solid #dedee3;
        backdrop-filter: blur(8px);
        background-color: rgba(26, 27, 25, .29);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  });

  return (
    <div className="pub-body-all joinusbg">
      {/* upper part  */}
      <div className="container">
        <div className="row">
          <div className="pubHeader">
            <h4>RESEARCH</h4>
            <p className="headtextpub">Team</p>
            <p className="smallertexts">
              The diverse team researchers and engineers at the lab <br /> who are working on cutting-edge AI research.
            </p>
          </div>
        </div>
      </div>

      {/* pi part  */}
      <div className="container">
        <div className="row">
          <h2 className="pub-year-title2">Principal Investigator </h2>

          <div className="mainHeadPi">
            <div className="piholder">
              <div className="piImage">
                <img
                  src={piImage}
                  alt="pi"
                />
              </div>

              <div className="piContent">
                <div className="piName">Yi Fang</div>
                <p className="description">
                  Associate Professor of Electrical and Computer Engineering; Associate Professor of Computer Science (Affiliated)
                </p>
                <p className="piTitle">Education: PhD Purdue University</p>
                <p className="piTitle">Affiliation: NYU Abu Dhabi</p>
                <p className='profdesc'>
                  Prof. Yi Fang received his PhD from Purdue University with a research focus on computer graphics and vision. Upon one year industry experience as a research intern in Siemens in Princeton, New Jersey and a senior research scientist in Riverain Technologies in Dayton, Ohio, and a
                  half-year academic experience as a senior staff scientist at Department of Electrical Engineering and Computer science, Vanderbilt University, Nashville, he joined NYU Abu Dhabi as an Assistant Professor of Electrical and Computer Engineering.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* lower part */}

      <div className="container">
        <div className="row">
          {allPeople.map((people, index) => (
            <div key={index} className='contentmargintop'>
              <h2 className="pub-year-title2">{people.type.charAt(0).toUpperCase() + people.type.slice(1).toLowerCase()}</h2>
              <div className="allMemUnderCat">
                {people.members.map((member, index2) => (
                  <div
                    key={index2}
                    className="posrelative">
                    <div className="card">
                      <div className="thumb"></div>
                      <div className="infos">
                        <h2 className="title">{member.name}</h2>
                        <h3 className="date">{member.title}</h3>
                        <h3 className="seats">Joined: {member.joined}</h3>
                        <p className="txt">{member.desc}</p>
                        <div className="gs">
                          <a
                            href={member.scholar}
                            target="_blank">
                            {' '}
                            <div>
                              <SiGooglescholar /> <span>Google scholar</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
      <hr className='contentmargintop' />
      {/* want to join  */}
      <div className="container">
        <div className="row">
          <div className="pubHeader">
            <h4>Join this team</h4>
            <p className="headtextpub">Ready for next steps?</p>
            <Link className="btnGradiented" to='/joinus'> Apply now</Link>
          </div>
        </div>
      </div>

      {/* end of the page */}
    </div>
  );
};

export default People;
