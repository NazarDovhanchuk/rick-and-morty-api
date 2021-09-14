import React, { useState } from 'react';

import CharactersList from './core/features/components/CharactersList/CharactersList';
import Pagination from './core/features/components/Pagination/Pagination';
import CustomInput from './core/features/shared/CustomInput/CustomInput';
import CustomSelect from './core/features/shared/CustomSelect/CustomSelect';

const statuses = [
  { id: 1, value: 'Alive' }, { id: 2, value: 'Dead' }, { id: 3, value: 'unknown' },
];

const App = (): JSX.Element => {
  const [characterStatus, setCharacterStatus] = useState('');

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {
    setCharacterStatus(e.target.value);
  };

  return (
    <>
      <CustomInput
        placeholder="Find your hero"
      />
      <CustomSelect name="characterStatus" value={characterStatus} handleChange={handleStatusChange} items={statuses} />
      <Pagination />
      <CharactersList status={characterStatus} />
    </>
  );
};

// const [heroSearch, setHeroSearch] = useState('');

// const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
//   setHeroSearch({ heroSearch: e.target.value });

//   // eslint-disable-next-line no-console
//   console.log(e.target.value);
// };

// eslint-disable-next-line implicit-arrow-linebreak
export default App;
