/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import CharactersList from './core/features/components/CharactersList/CharactersList';
import Pagination from './core/features/components/Pagination/Pagination';
import CharactersPage from './core/features/components/pages/DetailsPage/detailsPage';
import CharactersSearch from './core/features/components/CharactersSearch/CharactersSearch';
import SearchPage from './core/features/components/pages/SearchPage/SearchPage';
import HomePage from './core/features/components/pages/HomePage/HomePage';

const App = (): JSX.Element => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
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
