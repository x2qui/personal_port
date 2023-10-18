import React, {useEffect, } from 'react';
import './cursor.css';





const Cursor = () => {
  

    useEffect(() => {
        const cursor = document.querySelector('.x2q__cursor');
        const cursorAnimated = document.querySelector('.x2q__cursor-anim');
        const initialCursorPos = cursor.getBoundingClientRect();
        const initialCursorAnimatedPos = cursorAnimated.getBoundingClientRect();
    
        const links = document.querySelectorAll('a', 'Link');
    
        links.forEach(link => {
          link.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
            cursorAnimated.innerHTML = 'View';
          });
          link.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorAnimated.innerHTML = '';
          });
        });
    
        document.addEventListener('mousemove', e => {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
          cursorAnimated.style.left = `${e.clientX}px`;
          cursorAnimated.style.top = `${e.clientY}px`;
        });
    
        window.addEventListener('scroll', () => {
          cursor.style.left = `${initialCursorPos.left}px`;
          cursor.style.top = `${initialCursorPos.top + window.pageYOffset}px`;
          cursorAnimated.style.left = `${initialCursorAnimatedPos.left}px`;
          cursorAnimated.style.top = `${initialCursorAnimatedPos.top + (window.pageYOffset * 0)}px`;
        });
      }, []);

  return (
    <div >
        <div className='x2q__cursor'></div>
        <div className='x2q__cursor-anim'></div>
    </div>
    
  );
}

export default Cursor;
