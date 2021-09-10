import React from 'react';

interface InputProps {
  type: string;
  // label?: string;
  placeholder?: string;
  // value: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<InputProps> = () => (

  <>
    <input placeholder="Seacrh Characters" type="text" />
  </>
);

export default CustomInput;
