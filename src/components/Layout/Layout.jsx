import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logonobg.png';
import './Layout.css';

const Layout = (props) => {
  const [changeNav, setChangeNav] = React.useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setChangeNav(true);
      } else {
        setChangeNav(false);
      }
    });
  }, []);

  return (
    <>
      {/* nav  */}
      <nav className={` ${changeNav ? 'dark-nav' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="navbar">
              <h1>
                <Link to="/" className="showlogonav">
                  {' '}
                  <img src={logo} width={45} height={45} alt="logo" />{' '}
                  <span>NYU <span className='airText'>AI&R</span> Lab</span>
                </Link>
              </h1>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/publications">Publications</Link>
                </li>
                <li>
                  <Link to="/education">Education</Link>
                </li>
                <li>
                  <Link to="/people">People</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>

                <li>
                  <Link to='/joinus' className="btn">Join us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* body  */}

      {props.children}

      {/* footer  */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="upper-footer">
              <div className="logoandname">
                  <Link to="/">
                    {' '}
                    <img src={logo} width={180} height={180} alt="logo" />{' '}
                    <h1>NYU AI&R Lab</h1>
                    <p> Home of innovation and research</p>
                  </Link>
              </div>
              <div className="quicklinks">
                <h2>Quick Links</h2>
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/publications">Publications</Link>
                  </li>
                  <li>
                    <Link to="/education">Education</Link>
                  </li>
                  <li>
                    <Link to="/people">People</Link>
                  </li>
                  <li>
                    <Link to="/news">News</Link>
                  </li>
                </ul>
              </div>
              

              <div className="contact">
                <h2>Contact</h2>
                <h4>Please contact our lab through:</h4>
                <br />
                <h3>Location:</h3>
                <p>A1 007, NYU Abu Dhabi</p>
                <br />
                <h3>Email:</h3>
                <p> yf23@nyu.edu </p>
                
              </div>
            </div>
            <div className="lower-footer">Copyright &copy; 2024 NYU Abu Dhabi</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
