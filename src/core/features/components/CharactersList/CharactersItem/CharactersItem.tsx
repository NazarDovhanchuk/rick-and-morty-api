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
}

const CharactersItem: React.FC<CharacterItemProps> = ({
  name, species, image, stat, id,
}) => (
  <>
    <div className="characters__item">
      <img src={image} alt="Characters" className="characters__image" />
      <div className="characters__information">
        <Link
          to={{
            pathname: `/details/${id}`,
          }}
          style={{ textDecoration: 'none' }}
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
        </div>
      </div>
    </div>
  </>
);

export default CharactersItem;
