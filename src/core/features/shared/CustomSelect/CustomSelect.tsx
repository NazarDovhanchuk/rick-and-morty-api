import React from 'react';

import './style.scss';

interface CustomSelectProps {
  items: {
    id: number;
    value: string
  }[];
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className: string,
}

const CustomSelect: React.FunctionComponent<CustomSelectProps> = ({
  items, value, name, handleChange, className,
}) => (
  <select className={`select ${className}`} name={name} onChange={handleChange} value={value}>
    {items.map((item) => (
      <option
        key={item.id}
        selected={item.value === value}
        value={item.value}
      >
        {item.value}
      </option>
    ))}
  </select>
);

export default CustomSelect;
