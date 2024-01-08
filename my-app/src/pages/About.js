import React, { useEffect } from 'react';
import './About.css'
import Navbarfinal from './Navbarfinal';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function About() {

  return (
    <div>
      <Navbarfinal></Navbarfinal>
      <p className='underline-text' style={{ fontSize: '4rem', marginTop: '10vh', marginLeft: '40vw' }}>About Me</p>
      <div className='ok11111'>
        <img src='myphoto.jpeg' alt='abhi nhi h ' />
        <div className='aboutusdetails'>
          <div > <p>This is my image</p></div>
          <div className='aboutussocialicons'>
            <a href="https://www.instagram.com/_shreemartoasis_?igsh=Z3UxdzI0M2swampp">
              <img src='instaicon.png' className='socialicons' />
            </a>
            <a href="https://www.instagram.com/">
              <img src='facebookicon.png' className='socialicons' />
            </a>
            <a href="https://www.youtube.com/@CraftyMindSketchyhands/featured">
              <img src='youtubeicon.png' className='socialicons' />
            </a>
            {/* <a class="btn btn-primary" style={{backgroundColor: '#3b5998', href:"#!", role:"button" }}><i class="fab fa-facebook-f"></i></a> */}
          </div>
        </div>
      </div>
      {/* <h1>About</h1> */}
      {/* <p>This is the about page.</p> */}
      {/* <canvas id="paintCanvas" width="500" height="300"></canvas> */}
    </div>
  );
}

export default About;
