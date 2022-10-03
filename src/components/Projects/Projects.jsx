import React from 'react';
import './Projects.css';

import {BsMusicPlayer, BsFillCalendarWeekFill, BsTwitter} from 'react-icons/bs';
import {MdOutlineWeb} from 'react-icons/md';

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';




const Projects = () => {
    return (
        <div className = "fixheight">
            <div className = "projects" id = "Projects"></div>
            <div className = "projecthead">
              Projects:
              
            </div>
            <div className = "styling">
      <Carousel>
        <Carousel.Item interval={5000}>
          <div>
              <a href="https://github.com/danzi13/Website"target="_blank">
                  <div className = "container">
                    
                    <div className = "hover">
                    <MdOutlineWeb></MdOutlineWeb>

                      <Carousel.Caption>
                        <h3>Personal Website</h3>
                        <p>
                          Using the React environment, this link is the github files for all the
                          HTML, CSS and JavaScript source code for this responsive website. 
                        </p>
                      </Carousel.Caption>
                    </div>
                    </div>
                  </a>
                </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div>
              <a href="https://github.com/danzi13/PlaylistMerge-KNN-cluster"target="_blank">
                  <div className = "container">
                    
                    <div className = "hover">
                    <BsMusicPlayer></BsMusicPlayer>

                      <Carousel.Caption>
                        <h3>Spotify Playlist Merge</h3>
                        <p>
                          Uses machine learning, specifically KNN clustering, and spotify API to 
                          combine two playlists given by the user.
                        </p>
                      </Carousel.Caption>
                    </div>
                    </div>
                  </a>
                </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div>
              <a href="https://github.com/danzi13/WeeklyMileageDistribution"target="_blank">
                  <div className = "container">
                    
                    <div className = "hover">
                    <BsFillCalendarWeekFill></BsFillCalendarWeekFill>

                      <Carousel.Caption>
                        <h3>Weekly Mileage Distribution</h3>
                        <p>
                          Uses Multilinear Regression and Strava Api to output the 
                          amount of miles I should run this week on each day.  
                        </p>
                      </Carousel.Caption>
                    </div>
                    </div>
                  </a>
                </div>
        </Carousel.Item>
        
        <Carousel.Item interval={5000}>
          <div>
              <a href="https://github.com/danzi13/ML-sentimentAnalysis"target="_blank">
                  <div className = "container">
                    
                    <div className = "hover">
                    <BsTwitter></BsTwitter>

                      <Carousel.Caption>
                        <h3>Twitter Sentiment Analysis</h3>
                        <p>
                          Uses Linear Regression and Twitter Api to analyze the 
                          100 most recent tweets that contain a keyword specified by the user.
                        </p>
                      </Carousel.Caption>
                    </div>
                    </div>
                  </a>
                </div>
        </Carousel.Item>
        
      </Carousel>
    </div>
    
    <div className = "projectbot"></div>
    </div>
    )
} 

export default Projects