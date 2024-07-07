import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import nhl from '../images/nhl.jpeg';
import nhl2 from '../images/nhl2.jpeg';
import sharks1 from '../images/sharks1.jpg';
import shootout from '../images/shootout.jpeg';
import sharks2 from '../images/sharks2.jpg';
import sharks4 from '../images/sharks4.jpg';




function Cards() {
  return (
    <div className='cards'>
      <h1>PROGRAMS</h1>
      <div className='cards__container'>
        <h3></h3>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
             img src={nhl} alt='Hockey Mastery' className='navbar-logo-image'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label="Offensive Drills"
              path='/services'
            />
            <CardItem
             img src={sharks2} alt='Hockey Mastery' className='navbar-logo-image'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='Shooting Drills'
              path='/services'
            />
            <CardItem
              img src={sharks1} alt='Hockey Mastery' className='navbar-logo-image'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='Analysis of NHL Games'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
             img src={sharks4} alt='Hockey Mastery' className='navbar-logo-image'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='Goalie Drill'
              path='/services'
            />
            <CardItem
             img src={nhl2} alt='Hockey Mastery' className='navbar-logo-image'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='Stickhandling Drills'
              path='/products'
            />
            <CardItem
              img src={shootout} alt='Hockey Mastery' className='navbar-logo-image'
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