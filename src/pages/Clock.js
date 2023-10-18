import React from 'react';
import { Time } from '../containers';
import { Cursor } from '../components';
import { ScrollRestoration } from "react-router-dom";


const Clock = () => {
  return (
    <div>
      <ScrollRestoration />
      <Cursor />
      <Time />
    </div>
  );
}

export default Clock;
