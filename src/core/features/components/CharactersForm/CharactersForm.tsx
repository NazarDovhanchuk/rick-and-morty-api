import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CustomInput from '../../shared/CustomInput/CustomInput';
import CustomSelect from '../../shared/CustomSelect/CustomSelect';
import CharactersList from '../CharactersList/CharactersList';
import { getCharacters } from '../CharactersList/charactersList.actions';

import './style.scss';

const statuses = [
  { id: 1, value: 'Alive' }, { id: 2, value: 'Dead' }, { id: 3, value: 'unknown' },
];

const genders = [
  { id: 1, value: 'Female' }, { id: 2, value: 'Male' }, { id: 3, value: 'Genderless' }, { id: 4, value: 'unknown' },
];

const CharactersForm = (): JSX.Element => {
  const [characterStatus, setCharacterStatus] = useState('');
  const [gender, setGender] = useState('');
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handlerOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(getCharacters({
      // eslint-disable-next-line no-restricted-globals
      page: 1, name: search, status, gender,
    }));

    setSearch('');
  };

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {
    setCharacterStatus(e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {
    setGender(e.target.value);
  };
  return (
    <>
      <form className="form" onSubmit={handlerOnSubmit}>
        <CustomInput
          placeholder="Find your hero"
          handlerChange={handlerOnChange}
          searchValue={search}
        />
        <div className="form__select">
          <CustomSelect name="characterStatus" value={characterStatus} handleChange={handleStatusChange} items={statuses} />
          <CustomSelect name="characterGender" value={gender} handleChange={handleGenderChange} items={genders} />
        </div>
      </form>

      <CharactersList status={characterStatus} />
    </>
  );
};

export default CharactersForm;
