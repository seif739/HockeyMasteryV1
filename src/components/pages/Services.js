import React from 'react';
import '../../App.css';
import './Services.css';

import Carousel from 'react-bootstrap/Carousel';
import { Button } from '../Button';
//import nhl from '../../nhl.jpeg';


function Services() {
  return (
    <div className="services">
      <div className="services__content">
        <div className="services__text">
          <h1>TUTORIALS</h1>
          <p>Discover a comprehensive array of hockey tutorials designed to elevate your game. From offensive drills to defensive tactics, our tutorials cover every aspect needed to enhance your skills and strategy.</p>
          <div className="services__button-container">
            <Button buttonStyle="btn--primary" buttonSize="btn--large">Start Watching Now</Button>
          </div>
        </div>
        <div className="carousel-container">
          <Carousel interval={2500}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                //imageSrc={nhl}
                alt="Offensive Drills"
              />
              <Carousel.Caption>
                <h5>Offensive Drills</h5>
                <p>Enhance your offensive skills with our specialized drills designed to improve your speed, accuracy, and strategy.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                //Imagerc= {nhl}
                alt="Shooting Drills"
              />
              <Carousel.Caption>
                <h5>Shooting Drills</h5>
                <p>Master your shooting techniques with our comprehensive drills that cover everything from basic to advanced skills.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='/images/sharks4.jpg'
                alt="Goalie Drills"
              />
              <Carousel.Caption>
                <h5>Goalie Drills</h5>
                <p>Specialized drills to enhance your goaltending skills, focusing on reflexes, positioning, and game strategy.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='/images/sharks1.jpg'
                alt="Stickhandling Drills"
              />
              <Carousel.Caption>
                <h5>Stickhandling Drills</h5>
                <p>Improve your stickhandling with our targeted drills that enhance your control, speed, and maneuverability.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='/images/sharks2.jpg'
                alt="Defensive Drills"
              />
              <Carousel.Caption>
                <h5>Defensive Drills</h5>
                <p>Develop strong defensive skills with our comprehensive drills designed to improve your positioning and tactics.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Services;
