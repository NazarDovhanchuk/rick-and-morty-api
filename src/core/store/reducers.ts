import { combineReducers } from 'redux';

import { allCharacters, setLength } from '../features/components/CharactersList/charactersList.reducers';
import { charactersDetails, charactersID } from '../features/components/pages/DetailsPage/detailsPage.reducer';
import { searchCharacters } from '../features/components/CharactersSearch/charactersSearch.reducer';
import paginationReducer from '../features/components/Pagination/pagination.reducer';

const rootReducer = combineReducers({
  charactersReducer: allCharacters,
  charactersPage: paginationReducer,
  charactersLength: setLength,
  charactersSearch: searchCharacters,
  charactersID,
  charactersDetails,
});

export default rootReducer;
