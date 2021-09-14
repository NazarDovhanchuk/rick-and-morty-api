/* eslint-disable max-len */
import React from 'react';

interface CustomSelectProps {
  items: {
    id: number;
    value: string
  }[];
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: React.FunctionComponent<CustomSelectProps> = ({
  items, value, name, handleChange,
}) => (
  <select name={name} onChange={handleChange} value={value}>
    {items.map((item) => <option key={item.id} selected={item.value === value} value={item.value}>{item.value}</option>)}
  </select>
);

export default CustomSelect;
