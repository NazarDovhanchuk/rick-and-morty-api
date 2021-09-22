import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CharactersItem from '../../CharactersList/CharactersItem/CharactersItem';
import { getCharacters } from '../../CharactersList/charactersList.actions';
import { getCharactersList } from '../../CharactersList/charactersList.selector';

const SearchPage = (): JSX.Element => {
  const characters = useSelector(getCharactersList);
  const dispatch = useDispatch();

  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get('name');
  const gender = queryParams.get('gender');
  const status = queryParams.get('status');

  console.log(characters);

  useEffect(() => {
    dispatch(getCharacters({
      page: 1, name: name || '', gender: gender || '', status: status || '',
    }));
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

export default SearchPage;
