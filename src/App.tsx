import React from 'react';
import { useSelector } from 'react-redux';
import CharactersList from './core/features/components/CharactersList/CharactersList';

import InputSearch from './core/shared/InputSearch/InputSearch';
import { AppState } from './core/store/state';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const App: React.FC = () => {
  const characters = useSelector((state: AppState) => state.charactersReducer.charasters);
  // eslint-disable-next-line no-console
  console.log(characters);

  return (
    <>
      <InputSearch />
      <CharactersList charasters={characters} />
    </>
  );
};
export default App;
