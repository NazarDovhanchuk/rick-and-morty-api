/* eslint-disable max-len */
import { AppState } from '../../../store/state';
import { CharactersItem } from '../CharactersList/charactersList.state';

export const getCharactersSearch = (state: AppState): CharactersItem[] => state.charactersSearch.charasters;
export const getStatusLoad = (state: AppState): boolean => state.charactersSearch.loading;
export const getLoadMore = (state: AppState): boolean => state.charactersSearch.loadingMore;
export const getLoadFailure = (state: AppState): boolean => state.charactersSearch.searchFailure;

/// selector search page
export const setCharactersMore = (state: AppState): CharactersItem[] => state.charactersSearch.charasters;
