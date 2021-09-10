import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/state';
import Item from './CharactersItem/Item';

import './style.scss';

const CharactersList: React.FC = () => {
  const characters = useSelector((state: AppState) => state.charactersReducer.charasters);

  return (
    <div className="charachers__list">
      {characters.map((person) => (
        <Item
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
