import React, { useEffect } from 'react';
import './bentley.css';
import "aos/dist/aos.css";
import Aos from 'aos';
import Bentimg from '../../assets/bentleyimg.png';
const Bentley = () => {
    useEffect(()=> {
        Aos.init({ duration: 1500 });
      }, []);
  return (
    <div className='x2q__bentley-container section__padding'>
        <div className='x2q__bentley-content'>
            <div className='x2q__bentley-header header__padding'>
                <h1 data-aos='fade-in' className='content__padding gradient__sub'>Bentley Website Redesign</h1>
            </div>
            <div className='x2q__bentley-paragraph'>
                <p  data-aos='fade-in' className='content__padding header__padding'>This Is a <span className='blue'> self design </span>project i took up to help myself grow, I decided to give the <span className='blue'>Bentley </span>brand website a new design and feel.
                </p>
                <button  type='button' className='secondarybtn'>+ Find out more</button>
            </div>
            <div className='x2q__bentley-image'>
                <img data-aos='fade-in' src={Bentimg}  alt='bentley' />
            </div>

        </div>
      
    </div>
  );
}

export default Bentley;
