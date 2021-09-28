import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import CharactersItem from './CharactersItem/CharactersItem';
import { getCharactersList } from './charactersList.selector';

import './style.scss';

const CharactersList = (): JSX.Element => {
  const characters = useSelector(getCharactersList);
  const [loading, setLoading] = useState(true);

  console.log(characters);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) {
    return (
      <div className="loader loader__characters-list">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
    );
  }

  return (
    <div className="charachers">
      {characters.map((person) => (
        <CharactersItem
          key={person.id}
          name={person.name}
          species={person.species}
          image={person.image}
          stat={person.status}
          id={person.id}
        />
      ))}
    </div>
  );
};

export default CharactersList;
