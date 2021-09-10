import { combineReducers } from 'redux';
import allCharacters from '../features/components/CharactersList/charactersList.reducers';
import paginationReducer from '../features/components/Pagination/pagination.reducer';

const rootReducer = combineReducers({
  charactersReducer: allCharacters,
  charactersPage: paginationReducer,
});

export default rootReducer;
