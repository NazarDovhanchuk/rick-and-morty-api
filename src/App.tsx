import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import { getCharacters } from './core/features/components/CharactersList/charactersList.actions';

import CharactersList from './core/features/components/CharactersList/CharactersList';
import Pagination from './core/features/components/Pagination/Pagination';
import CustomForm from './core/features/shared/CustomForm/CustomForm';
import CustomSelect from './core/features/shared/CustomSelect/CustomSelect';
import CustomInput from './core/features/shared/CustomInput/CustomInput';
import CharactersPage from './core/features/components/CharactersPage/CharactersPage';

const statuses = [
  { id: 1, value: 'Alive' }, { id: 2, value: 'Dead' }, { id: 3, value: 'unknown' },
];

const genders = [
  { id: 1, value: 'Female' }, { id: 2, value: 'Male' }, { id: 3, value: 'Genderless' }, { id: 4, value: 'unknown' },
];

const App = (): JSX.Element => {
  const [characterStatus, setCharacterStatus] = useState('');
  const [gender, setGender] = useState('');
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handlerOnSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(getCharacters({
      page: 1, name: search, gender,
    }));

    setSearch('');
  };

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {
    setCharacterStatus(e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {
    setGender(e.target.value);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <CustomForm handlerSubmit={handlerOnSubmit} className="form">
              <CustomInput
                placeholder="Find your hero"
                searchValue={search}
                handlerChange={handlerOnChange}
                className="characters__input"
              />
              <CustomSelect
                name="characterStatus"
                value={characterStatus}
                handleChange={handleStatusChange}
                items={statuses}
                className="custom__select"
              />
              <CustomSelect
                name="characterGender"
                value={gender}
                handleChange={handleGenderChange}
                items={genders}
                className="custom__select"
              />
            </CustomForm>
            <Pagination />
            <CharactersList status={characterStatus} />
          </Route>
          <Route path="/details:id" component={CharactersPage} />
        </Switch>
      </Router>
    </>

  );
};

export default App;
