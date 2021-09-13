import React from 'react';

import CharactersList from './core/features/components/CharactersList/CharactersList';
import Pagination from './core/features/components/Pagination/Pagination';
import { setSeacrh } from './core/features/shared/CustomInput/custom.input.actions';
import CustomInput from './core/features/shared/CustomInput/CustomInput';

const App = (): JSX.Element => (
  <>
    <CustomInput
      placeholder="Find your hero"
      action={setSeacrh}
    />
    <Pagination />
    <CharactersList />
  </>
);

// const [heroSearch, setHeroSearch] = useState('');

// const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
//   setHeroSearch({ heroSearch: e.target.value });

//   // eslint-disable-next-line no-console
//   console.log(e.target.value);
// };

// eslint-disable-next-line implicit-arrow-linebreak
export default App;
