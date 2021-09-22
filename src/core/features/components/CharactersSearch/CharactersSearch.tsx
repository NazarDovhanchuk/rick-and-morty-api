/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from '@material-ui/core';
import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import CustomButton from '../../shared/CustomButton/CustomButton';
import CustomForm from '../../shared/CustomForm/CustomForm';
import CustomInput from '../../shared/CustomInput/CustomInput';
import CustomSelect from '../../shared/CustomSelect/CustomSelect';
import { getCharacters } from '../CharactersList/charactersList.actions';

const statuses = [
  { id: 1, value: 'Alive' }, { id: 2, value: 'Dead' }, { id: 3, value: 'unknown' },
];

const genders = [
  { id: 1, value: 'Female' }, { id: 2, value: 'Male' }, { id: 3, value: 'Genderless' }, { id: 4, value: 'unknown' },
];

const CharactersSearch = (): JSX.Element => {
  const [characterStatus, setCharacterStatus] = useState('Alive');
  const [gender, setGender] = useState('Female');
  const [search, setSearch] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handlerOnSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(getCharacters({
      page: 1, name: search || '', gender: gender || '', status: characterStatus || '',
    }));
    history.push(`/search?name=${search}&gender=${gender}&status=${characterStatus}`);
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
      <div>
        <CustomForm handlerSubmit={handlerOnSubmit} className="form">
          <CustomInput
            placeholder="Find your hero"
            searchValue={search}
            handlerChange={handlerOnChange}
            className="characters__input"
          />
          <CustomSelect
            name="characterStatus"
            value={characterStatus}
            handleChange={handleStatusChange}
            items={statuses}
            className="custom__select"
          />
          <CustomSelect
            name="characterGender"
            value={gender}
            handleChange={handleGenderChange}
            items={genders}
            className="custom__select"
          />

          <CustomButton handlerOnClick={handlerOnSubmit} className="pagination__button" field="Search" />
        </CustomForm>
      </div>
    </>
  );
};

export default CharactersSearch;
