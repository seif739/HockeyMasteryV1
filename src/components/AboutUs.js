import React from 'react';
import './AboutUs.css';
import CoachCard from './CoachCard';

function AboutUs() {
  return (
    <div className="about-us">
      <h1 className="section-title">About Us</h1>
      <div className="coach-cards">
        <CoachCard
          imageSrc='./images/Coach1.jpeg'
          name="David McConnor"
          description="Coach David brings over 15 years of experience in professional hockey coaching. His focus on technique and strategy has led many players to excel in their careers."
        />
        <CoachCard
          imageSrc="./images/coach4.jpeg"
          name="Lamar Kendrick"
          description="With a background in elite-level women's hockey, Coach Lamar emphasizes skill development and mental toughness. Her coaching style combines precision with passion."
        />
        <CoachCard
          imageSrc="./images/coach5.jpeg"
          name="Michael Reeves"
          description="Coach Michael's career spans from NHL player to coaching. His expertise in offensive tactics and player development has groomed several prospects for the big leagues."
        />
      </div>
    </div>
  );
}

export default AboutUs;
