import React from 'react';
import { useSelector } from 'react-redux';
import CharactersItem from './CharactersItem/CharactersItem';
import { getCharactersList } from './charactersList.selector';

import './style.scss';

const CharactersList: React.FC = () => {
  const characters = useSelector(getCharactersList);

  return (
    <div className="charachers__list">
      {characters.map((person) => (
        <CharactersItem
          key={person.id}
          name={person.name}
          species={person.species}
          image={person.image}
        />
      ))}
    </div>
  );
};

export default CharactersList;
