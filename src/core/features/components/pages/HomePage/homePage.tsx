import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const HomePage = (): JSX.Element => (
  <div className="home__page">
    <h1>Rick And Morty Api</h1>
    <Link to="/page/1" style={{ textDecoration: 'none' }}>
      <h4 className="home__link">Find your Characters</h4>
    </Link>
  </div>
);

export default HomePage;
