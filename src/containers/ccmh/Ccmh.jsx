import React from 'react';
import './ccmh.css';
import "aos/dist/aos.css";
import CCMH from '../../assets/ccmhimg.png';
const Ccmh = () => {
    
  return (
    <div className='x2q__ccmh-container section__padding'>
        <div className='x2q__ccmh-content'>
            <div className='x2q__ccmh-header header__padding'>
                <h1 data-aos='fade-in' className='content__padding gradient__sub'>Calm Corner Mental Health</h1>
            </div>
        <div className='x2q__ccmh-flex-content'>
            <div className='x2q__ccmh-paragraph'>
                <p data-aos='fade-right' className='content__padding'><a href='https://calmcornermh.com' targer='blank'><span className='blue'> Calm corner Mental Health </span></a>is a web development project and  user interface design. This project was brought to life using <span className='blue'>Figma </span>design software and <span className='blue'>React Js</span> framework.</p>
                <button type='button'  className='secondarybtn'>+ Find out more</button>
            </div>
            <div className='x2q__ccmh-image'>
                <img data-aos='fade-left' src={CCMH}  alt='Calm corner mental health' />
            </div>
        </div>
        </div>
      
    </div>
  );
}

export default Ccmh;
