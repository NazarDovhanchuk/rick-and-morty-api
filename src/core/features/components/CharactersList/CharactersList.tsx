/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import CharactersItem from './CharactersItem/CharactersItem';
import { getCharactersList } from './charactersList.selector';

import './style.scss';

const CharactersList = (): JSX.Element => {
  const characters = useSelector(getCharactersList);

  return (
    <div className="charachers">
      {characters.map((person) => (
        <CharactersItem
          key={person.id}
          name={person.name}
          species={person.species}
          image={person.image}
          stat={person.status}
          location={person.location}
          id={person.id}
        />
      ))}
    </div>
  );
};

export default CharactersList;
