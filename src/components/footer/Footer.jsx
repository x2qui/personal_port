import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <div className='x2q__footer-container'>
      <div className='x2q__footer-content'>
        <div className='x2q__footer-header'>
          <h1 className='gradient__text content__padding'> I'd love to hear from you </h1>
        </div>
        <div className='x2q__footer-links'>
          <p><a href="https://www.linkedin.com/in/x2qui/" target='_blank' rel="noreferrer"><span className='blue'>+ Linkedin</span></a></p>
          <p> <a href='https://instagram.com/x2qui?igshid=NTc4MTIwNjQ2YQ=='target='_blank' rel='noreferrer'> <span className='blue'>+ Instagram</span> </a></p>
          <p><a href='https://www.behance.net/sohlohmohnwilly' target='_blank' rel='noreferrer'><span className='blue'>+ Behance</span></a></p>
        </div>
        <div className='x2q__footer-email'>
          <p> <a href='mailto:quadriux2@gmail.com'target='_blank' rel='noreferrer'> <span className='blue'>Quadriux2@gmail.com</span></a></p>
        </div>

      </div>
      
    </div>
  );
}

export default Footer;
