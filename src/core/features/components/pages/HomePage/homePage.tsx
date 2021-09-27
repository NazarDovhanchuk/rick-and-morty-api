/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const HomePage = (): JSX.Element => (
  <div className="home__page">
    <div>Rick And Morty Api</div>
    <Link to="/page/1">'Find your Characters'</Link>
  </div>
);

export default HomePage;
