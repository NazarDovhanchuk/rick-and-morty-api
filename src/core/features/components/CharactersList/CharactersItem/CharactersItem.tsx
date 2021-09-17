/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';

import {
  Link,
} from 'react-router-dom';

import './style.scss';

interface CharacterItemProps {
  id: number,
  name: string;
  species: string;
  image: string;
  stat: string,
  location: any;
}

const CharactersItem: React.FC<CharacterItemProps> = ({
  name, species, image, stat, location, id,
}) => (
  <>
    <div className="characters__item">
      <img src={image} alt="Characters" className="characters__image" />
      <div className="characters__information">
        <Link to={{
          pathname: `/${id}`,
        }}
        >
          <h3 className="characters__name">{name}</h3>
        </Link>
        <p className="characters__species">
          {stat}
          {' '}
          -
          {' '}
          {species}
        </p>
        <div className="characters__location">
          <p className="characters__location--info">Last known location:</p>
          <p className="characters__location--details">{location.name}</p>
        </div>
      </div>
    </div>
  </>
);

export default CharactersItem;
