import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import './App.css';
import {Navbar, Footer, Cursor} from './components';
import {Header, Welcome, Ccmh, Maroongt , Bentley,} from './containers';


const App = () => {
  return (
    <div>
      <ScrollRestoration />
       <Cursor />
      <div className='headerimg'>
       
        <Navbar />
        <Header />
        
      </div>
       
        <Welcome />
        
        <Maroongt />
        <Ccmh />
        
        <Bentley />
       
       
        
       
        
        <Footer />
        
    </div>
  );
}

export default App;
