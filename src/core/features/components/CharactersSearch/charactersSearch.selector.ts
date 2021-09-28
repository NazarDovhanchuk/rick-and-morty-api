/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AppState } from '../../../store/state';

export const getCharactersSearch = (state: AppState) => state.charactersSearch.charasters;
export const getStatusLoad = (state: AppState) => state.charactersSearch.loading;
export const getLoadMore = (state: AppState) => state.charactersSearch.loadingMore;
export const getLoadFailure = (state: AppState) => state.charactersSearch.searchFailure;
