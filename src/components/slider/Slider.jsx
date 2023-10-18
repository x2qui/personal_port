import React, {useState, useEffect} from 'react';
import './slider.css';

const Navigator = ({amountSlides, nextSlide}) => {
  return (
    
    <div className='x2q__navigator-container'>
      <div className='x2q__navigator'>
      {Array(amountSlides).fill(1).map((_, i)=>(
        <div className='x2q__dot' key={i}  onClick={() => nextSlide(i)} />
      ))}
      </div>
    </div>

  );
}


const Slider = ({images = [],  autoPlay= true, autoPlayTime= 4000, ...props }) => {

  const [currentSlide, setCurrentslide] = useState(0);

  function nextSlide (slideIndex = currentSlide + 1){
     
    const newSlideIndex = slideIndex >= images.length  ? 0 : slideIndex;

    setCurrentslide(newSlideIndex);

  }

  useEffect(() => {
      const timer = setTimeout(()=>{
       
      }, autoPlayTime);
    
      return()=> clearTimeout(timer);
  }, [currentSlide, autoPlayTime, images.length]);


  return (
  
    <div {...props} className='x2q__slider-container'>
      {images.map((imageUrl, index) => (
        <div className='x2q__slider' key={index} style={{ backgroundImage: `url(${images[currentSlide].image})`,
        marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined}} >
        </div>
           ))}
         <div className='x2q__downloader-description'>
      <div className='x2q__downloaderpage-header'>
        <h2 className='fade-in'> {images[currentSlide].title}</h2>
        
        </div> 
        <div className='x2q__divider fade-inp' />
        <div className='x2q__downloaderpage-btn fade-inp'>
        <p>{images[currentSlide].button}</p>

        </div>
        
     </div>
     
        <div>
          <Navigator currentSlide={currentSlide} 
          amountSlides={images.length} nextSlide={nextSlide} />
        </div>
        
    </div>

    
 
  );
}

export default Slider;
