import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="navbar">
            <h1>NYU AIR Lab!</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Publications</li>
              <li>People</li>
              <li>
                <button className="btn">Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
