/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusLoad } from '../CharactersSearch/charactersSearch.selector';
import CharactersItem from './CharactersItem/CharactersItem';
import { getCharacters, setCharacters } from './charactersList.actions';
import { getCharactersList } from './charactersList.selector';

import './style.scss';

const CharactersList = (): JSX.Element => {
  const characters = useSelector(getCharactersList);
  const [loading, setLoading] = useState(true);

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
          location={person.location}
          id={person.id}
        />
      ))}
    </div>
  );
};

export default CharactersList;
