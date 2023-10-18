import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {
 
  return (
    <div className='x2q__header-container section__padding '> 
  
      <div className=' x2q__header-content header__padding'>
        <h1 className='content__padding fade-in gradient__text'> Jaw-Dropping Websites<br />Ui/Ux Design</h1>
        <p className='content__padding fade-inp'>Hi I am Quadri, I'm a web developer and google certified user experience designer.</p>
       
       
        <div className='x2q__header-btn'>
        <button className='primarybtn fade-inb' type='button'><Link to='/about'>Read More</Link></button>
        </div>
      </div>
      
    
    </div>
  );
}

export default Header;
