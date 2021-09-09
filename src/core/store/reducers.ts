import { combineReducers } from 'redux';
import allCharacters from '../features/components/CharactersList/charactersList.reducers';

const rootReducer = combineReducers({
  charactersReducer: allCharacters,
  // searchReducer: seacrhCharacters,
});

export default rootReducer;
