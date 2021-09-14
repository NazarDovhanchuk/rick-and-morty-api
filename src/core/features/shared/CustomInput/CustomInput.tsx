/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

import './style.scss';

interface InputProps {
  // eslint-disable-next-line react/require-default-props
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handlerChange: any;
  searchValue: string;
}

const CustomInput: React.FC<InputProps> = ({
  placeholder, handlerChange, searchValue,
}) => (
  <input className="input" placeholder={placeholder} value={searchValue} onChange={handlerChange} />
);

export default CustomInput;
