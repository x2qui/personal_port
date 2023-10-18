import React, { useEffect } from 'react';
import './welcome.css';
import Aos from 'aos';
import "aos/dist/aos.css";


const Welcome = () => {
  useEffect(()=> {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className='x2q__welcome-container section__padding' >
      <div className='x2q__welcome-content'>
          <div  className='x2q__welcome-header header__padding'>
            <h1 data-aos='fade-in' className='content__padding gradient__text'> Welcome to my portfolio</h1>
          </div>
          <div className='x2q__welcome-paragraph'>
            <p data-aos='fade-left'className='content__padding'> Hi again, welcome to my <span className='blue'>digital haven</span>, where <span className='blue'>creativity</span> meets <span className='blue'>functionality</span>, and <span className='blue'>pixels</span> come to life. I'm thrilled to have you here as we embark on a journey through my world as a <span className='blue'>Front-End Web Developer</span> and<span className='blue'> UI/UX Designer</span>. <span className='blue'>My portfolio</span> is not just a collection of <span className='blue'>projects</span>; it's a testament to my <span className='blue'>passion </span>for <span className='blue'>crafting digital experiences </span> that leave a lasting impact. </p>
          </div>
      </div>
      
    </div>
  );
}

export default Welcome;
