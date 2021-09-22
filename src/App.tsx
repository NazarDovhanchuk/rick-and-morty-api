/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import CharactersList from './core/features/components/CharactersList/CharactersList';
import Pagination from './core/features/components/Pagination/Pagination';
import CharactersPage from './core/features/components/CharactersPage/CharactersPage';
import CharactersSearch from './core/features/components/CharactersSearch/CharactersSearch';
import SearchPage from './core/features/components/CharactersSearch/SearchPage/SearchPage';

const statuses = [
  { id: 1, value: 'Alive' }, { id: 2, value: 'Dead' }, { id: 3, value: 'unknown' },
];

const genders = [
  { id: 1, value: 'Female' }, { id: 2, value: 'Male' }, { id: 3, value: 'Genderless' }, { id: 4, value: 'unknown' },
];

const App = (): JSX.Element => (
  <>
    <Router>
      <Switch>
        <Route exact path="/">
          <CharactersSearch />
          <Pagination />
          <CharactersList />
        </Route>
        <Route path="/page/:id">
          <CharactersSearch />
          <Pagination />
          <CharactersList />
        </Route>
        <Route path="/details/:id" component={CharactersPage} />
        <Route path="/search/">
          <CharactersSearch />
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  </>

);

export default App;
