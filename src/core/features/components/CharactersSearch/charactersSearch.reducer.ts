/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CharactersListState } from '../CharactersList/charactersList.state';
import { CharactersSearchActions, CharactersSearch } from './charactersSearch.actions';

const initial: CharactersListState = {
  charasters: [],
};

export const searchCharacters = (state = initial, action: CharactersSearchActions): CharactersListState => {
  switch (action.type) {
    case CharactersSearch.SET_SEARCH:
      return {
        charasters: [...action.payload],
      };

    default:
      return state;
  }
};
