import React from 'react';
import './maroongt.css';
import MGT from '../../assets/Maroongtimg.jpg';
import 'aos/dist/aos.css';



const Maroongt = () => {
  return (
    <div className='x2q__maroon-container section__padding'>
        <div className='x2q__maroon-content'>
            <div className='x2q__maroon-header header__padding'>
                <h1 data-aos='fade-in' className='content__padding gradient__sub'>Maroon General trading</h1>
            </div>
        <div className='x2q__maroon-flex-content'>
            <div className='x2q__maroon-image'>
                <img data-aos='fade-left' src={MGT}  alt='Maroon General Trading' />
            </div>
            <div className='x2q__maroon-paragraph'>
                <p data-aos='fade-right' className='content__padding'><a href='https://maroongt.com' targer='blank'><span className='blue'>Maroon General Trading</span> </a> is a <span className='blue'>web development</span> and<span className='blue'> e-commerce</span> project . This project was brought to life using <span className='blue'>wordpress</span> content management system and <span className='blue'>Woocommerce</span>.</p>
                <button type='button'  className='secondarybtn'>+ Find out more</button>
            </div>
            
        </div>
        </div>
     </div>
  );
}

export default Maroongt;
