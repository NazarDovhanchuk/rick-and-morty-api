import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharactersItem from './CharactersItem/CharactersItem';
import { getCharacters } from './charactersList.actions';
import { getCharactersList } from './charactersList.selector';

import './style.scss';

interface CharactersListProps {
  status: string;
}

const CharactersList: React.FC<CharactersListProps> = ({ status }) => {
  const characters = useSelector(getCharactersList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters({ page: 1, status }));
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
        />
      ))}
    </div>
  );
};

export default CharactersList;
