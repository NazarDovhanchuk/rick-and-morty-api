/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../components/Pagination/pagination.actions';

interface InputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: any
  // eslint-disable-next-line react/require-default-props
  placeholder?: string;
}

const CustomInput: React.FC<InputProps> = ({ action, placeholder }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handlerOnSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(setPage(1));
    dispatch(action(search));

    setSearch('');
  };

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input placeholder={placeholder} value={search} onChange={handlerOnChange} />
      <button onClick={handlerOnSubmit}>Search</button>
    </>
  );
};

export default CustomInput;
