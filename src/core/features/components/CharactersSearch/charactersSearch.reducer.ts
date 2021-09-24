/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CharactersListState } from '../CharactersList/charactersList.state';
import {
  CharactersSearchActions, CharactersSearch, SetCharacters, SetLoadMore,
} from './charactersSearch.actions';

const initial: CharactersListState = {
  charasters: [],
  loading: false,
  loadingMore: false,
};

export const searchCharacters = (state = initial, action: CharactersSearchActions): CharactersListState => {
  switch (action.type) {
    case CharactersSearch.SET_SEARCH: {
      const { payload } = action as SetCharacters;

      return {
        ...state,
        charasters: [...payload],
        loading: true,
      }; }

    case CharactersSearch.LOAD_MORE: {
      const { payload } = action as SetLoadMore;

      return {
        ...state,
        loadingMore: payload,
      }; }

    default:
      return state;
  }
};
