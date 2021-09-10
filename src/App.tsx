import React from 'react';
import CharactersList from './core/features/components/CharactersList/CharactersList';
import Pagination from './core/features/components/Pagination/Pagination';
import CustomInput from './core/features/shared/CustomInput/CustomInput';

const App = (): JSX.Element =>
// const [heroSearch, setHeroSearch] = useState('');

// const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
//   setHeroSearch({ heroSearch: e.target.value });

//   // eslint-disable-next-line no-console
//   console.log(e.target.value);
// };

  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <>
      <CustomInput
        type="text"
        placeholder="Find your hero"
      />
      <Pagination />
      <CharactersList />
    </>
  );
export default App;
