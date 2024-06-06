import React, { Component } from 'react';
import "./About.css";
import profilePic from '../assets/profilepic.png'; // Adjust the path

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src={profilePic}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Daniel Gao</div>
              <div className="brief_description">
                {"Software Developer"}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
