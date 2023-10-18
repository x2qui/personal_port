import React from 'react';
import { ScrollRestoration } from "react-router-dom";

import { Navbar, Footer, Cursor } from '../components';
import { Quidownloaderpage } from '../containers';

const Quidownloader = () => {
  return (
    <div >
      <Cursor />
      <div>
      <ScrollRestoration/>
      <Navbar />
      <Quidownloaderpage />
      </div>
      <Footer />
    </div>
  );
}

export default Quidownloader;
