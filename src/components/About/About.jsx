import React from 'react'
import { NavLink } from 'react-router-dom';
import img from '../assets/img1.jpg';

function About() {
  return (
  // <div className="p-5">
      <div className="container mb-5">
         <h1 className=" mb-4 text-black">About Us</h1>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <img
              src={img}
              alt="About Us"
              className="h-100 w-100 rounded shadow"
            />
          </div>
          <div className="col-lg-6 col-md-12 text-center text-md-left">
           
            <p className="lead text-muted text-justify mt-3">
              We are passionate about innovation, creativity, and excellence.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              quis ante et odio imperdiet mattis.
            </p>
            <p className="lead text-muted text-justify">
              Our team is dedicated to pushing the boundaries of what's possible.
              We believe in the power of imagination and the impact of
              technology.
            </p>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default About;