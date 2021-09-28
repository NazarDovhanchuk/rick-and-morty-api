/* eslint-disable @typescript-eslint/no-explicit-any */
import { CharactersItem, CharactersListState } from '../features/components/CharactersList/charactersList.state';
import { CharactersPageState } from '../features/components/Pagination/pagination.state';

export interface AppState {
  charactersReducer: CharactersListState;
  charactersDetails: CharactersItem;
  charactersPage: CharactersPageState,
  charactersSearch: CharactersListState;
  charactersLength: any;
}
