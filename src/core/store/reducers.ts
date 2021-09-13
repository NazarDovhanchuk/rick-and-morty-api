import { combineReducers } from 'redux';
import allCharacters from '../features/components/CharactersList/charactersList.reducers';
import paginationReducer from '../features/components/Pagination/pagination.reducer';
import searchReducer from '../features/shared/CustomInput/custom.input.reducer';

const rootReducer = combineReducers({
  charactersReducer: allCharacters,
  charactersPage: paginationReducer,
  charactersSearch: searchReducer,
});

export default rootReducer;
