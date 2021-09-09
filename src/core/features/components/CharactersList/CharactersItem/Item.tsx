import React from 'react';
import './style.scss';

interface CharacterItem {
  name: string;
  species: string;
  image: string;
}

const Item: React.FC<CharacterItem> = ({ name, species, image }) => (
  <div className="characters__item">
    <img src={image} alt="Characters" className="characters__image" />
    <div className="characters__information">
      <h3 className="characters__name">{name}</h3>
      <p className="characters__species">{species}</p>
    </div>
  </div>
);

export default Item;
