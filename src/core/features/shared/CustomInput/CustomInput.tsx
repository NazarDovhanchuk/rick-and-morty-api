import React from 'react';

import './style.scss';

interface InputProps {
  placeholder: string;
  handlerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  className: string,
}

const CustomInput: React.FC<InputProps> = ({
  placeholder, handlerChange, searchValue, className,
}) => (
  <input className={`input ${className}`} placeholder={placeholder} value={searchValue} onChange={handlerChange} />
);

export default CustomInput;
