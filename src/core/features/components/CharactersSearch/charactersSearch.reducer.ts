/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CharactersListState } from '../CharactersList/charactersList.state';
import {
  CharactersSearchActions, CharactersSearch, SetCharacters, SetLoadMore, SetLoadFailure, SetMoreCharacters,
} from './charactersSearch.actions';

const initial: CharactersListState = {
  charasters: [],
  loading: false,
  loadingMore: false,
  searchFailure: false,
  page: 1,
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

    case CharactersSearch.SET_LOAD_CHARACTERS: {
      const { payload } = action as SetCharacters;
      return {
        ...state,
        charasters: [...state.charasters, ...payload],
      };
    }

    case CharactersSearch.LOAD_MORE: {
      const { payload } = action as SetLoadMore;

      return {
        ...state,
        loadingMore: payload,
      }; }

    case CharactersSearch.LOAD_FAILURE: {
      const { payload } = action as SetLoadFailure;
      return {
        ...state,
        searchFailure: payload,
      };
    }

    default:
      return state;
  }
};

