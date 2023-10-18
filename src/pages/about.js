import React from 'react';
import { Navbar,Footer, Cursor } from '../components';
import { ScrollRestoration } from 'react-router-dom';
import { Myself } from '../containers';

const about = () => {
  return (
    <div>
     <Cursor />
     <ScrollRestoration />
     <Navbar />
     <Myself />
     <Footer />
    </div>
  );
}

export default about;
