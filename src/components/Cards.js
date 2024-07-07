import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>PROGRAMS</h1>
      <div className='cards__container'>
        <h3></h3>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/shootout.jpeg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label="Offensive Drills"
              path='/services'
            />
            <CardItem
              src='./images/sharks2.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='Shooting Drills'
              path='/services'
            />
            <CardItem
              src='./images/sharks1.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='Analysis of NHL Games'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/sharks4.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='Goalie Drill'
              path='/services'
            />
            <CardItem
              src='./images/nhl.jpeg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='Stickhandling Drills'
              path='/products'
            />
            <CardItem
              src='./images/faceoff.jpeg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='Defensive Drills'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;