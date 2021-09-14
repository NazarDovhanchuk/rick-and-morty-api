/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCharacters } from '../../components/CharactersList/charactersList.actions';

import './style.scss';

interface InputProps {
  // eslint-disable-next-line react/require-default-props
  placeholder?: string;
  status: string;
  gender: string;
}

const CustomInput: React.FC<InputProps> = ({ placeholder, status, gender }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handlerOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(getCharacters({
      page: 1, name: search, status, gender,
    }));

    setSearch('');
  };

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form className="form" onSubmit={handlerOnSubmit}>
      <input className="form__input" placeholder={placeholder} value={search} onChange={handlerOnChange} />
    </form>
  );
};

export default CustomInput;
