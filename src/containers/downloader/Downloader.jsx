import React, {useEffect} from 'react';
import './downloader.css';
import Dwn from '../../assets/downloaderimg.png';
import "aos/dist/aos.css";
import Aos from 'aos';


const Downloader = () => {
    useEffect(()=> {
        Aos.init({ duration: 1000 });
      }, []);

  return (
    <div className='x2q__downloader-container section__padding'>
        <div className='x2q__downloader-content'>
            <div className='x2q__downloader-header header__padding'>
                <h1 data-aos='fade-in' className='content__padding gradient__sub '>Qui Down Loader  </h1>

            </div>
            <div className='x2q__downloader-flex-content'>
                <div className='x2q__downloader-paragraph'>
                    <p data-aos='fade-in' className='content__padding'><span className='blue'>Qui Downloader</span> is a web based application that grants its users ability to download <span className='blue'>instagram reels</span>, <span className='blue'>youtube videos</span> and <span className='blue'>tiktok videos</span>. No ads and no profile creation required.
                    </p>
                    <button  type='button' className='secondarybtn'>+ Coming Soon</button>
                </div>
                <div className='x2q__downloader-image'>
                    <img data-aos='fade-in' src={Dwn}  alt='downloader' />
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Downloader;
