import React from 'react';
import './quidownloaderpage.css';
import { Link } from 'react-router-dom';
import { Imageslider } from '../../components';
import image1 from '../../assets/ig.jpg';
import image2 from '../../assets/YT.jpg';
import image3 from '../../assets/tiktok.jpg';





const Quidownloader = () => {
  return (
    <div className='x2q__quidownloaderpage-container'>
      <div className='x2q__quidownloaderpage-images'>
        <Imageslider  images={[
          {
            image:image1, 
            title:'Download Instagram Reels For free', 
            button: <button className='Quibutton'><Link to='/instagramreels'>Launch Downloader</Link></button>
          },
          {
            image: image2, 
            title:'Download Youtube Videos For free',
            button: <button className='Quibutton'><Link to='/Quidownloader'>Launch Downloader</Link></button>
          }, 
          {image: image3, 
          title:'Download Tiktok Videos For free',
          button: <button className='Quibutton'><Link to='/Quidownloader'>Launch Downloader</Link></button>
          }]}  />
        
      </div>
     
      
      
    </div>
  );
}

export default Quidownloader;
