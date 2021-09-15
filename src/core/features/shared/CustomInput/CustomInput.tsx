/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

import './style.scss';

interface InputProps {
  placeholder: string;
  handlerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}

const CustomInput: React.FC<InputProps> = ({
  placeholder, handlerChange, searchValue,
}) => (
  <input className="input" placeholder={placeholder} value={searchValue} onChange={handlerChange} />
);

export default CustomInput;
