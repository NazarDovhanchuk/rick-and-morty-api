import React from 'react';
import Item from './CharactersItem/Item';
import { CharactersItem } from './charactersList.state';

import './style.scss';

interface CharactersListProps {
  charasters: CharactersItem[]
}

const CharactersList: React.FC<CharactersListProps> = ({ charasters }) => (
  <div className="charachers__list">
    {charasters.map((person) => (
      <Item
        key={person.id}
        name={person.name}
        species={person.species}
        image={person.image}
      />
    ))}
  </div>
);

export default CharactersList;
