/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCharacters } from '../../components/CharactersList/charactersList.actions';

interface InputProps {
  // eslint-disable-next-line react/require-default-props
  placeholder?: string;
}

const CustomInput: React.FC<InputProps> = ({ placeholder }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handlerOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(getCharacters({ page: 1, name: search }));

    setSearch('');
  };

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={handlerOnSubmit}>
      <input placeholder={placeholder} value={search} onChange={handlerOnChange} />
    </form>
  );
};

export default CustomInput;
