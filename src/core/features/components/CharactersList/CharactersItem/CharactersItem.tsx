/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import './style.scss';

interface CharacterItemProps {
  name: string;
  species: string;
  image: string;
  stat: string,
  location: any;
}

const CharactersItem: React.FC<CharacterItemProps> = ({
  name, species, image, stat, location,
}) => (
  <div className="characters__item">
    <img src={image} alt="Characters" className="characters__image" />
    <div className="characters__information">
      <h3 className="characters__name">{name}</h3>
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
);

export default CharactersItem;
