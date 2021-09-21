import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharactersItem from './CharactersItem/CharactersItem';
import { getCharacters } from './charactersList.actions';
import { getCharactersList } from './charactersList.selector';

import './style.scss';

interface CharactersListProps {
  status: string;
  gender: string;
}

const CharactersList: React.FC<CharactersListProps> = ({ status, gender }) => {
  const characters = useSelector(getCharactersList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters({ page: 1, gender, status }));
  }, []);

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
