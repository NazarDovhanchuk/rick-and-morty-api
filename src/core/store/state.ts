/* eslint-disable @typescript-eslint/no-explicit-any */
import { CharactersItem, CharactersListState } from '../features/components/CharactersList/charactersList.state';

export interface AppState {
  charactersReducer: CharactersListState;
  charactersDetails: CharactersItem;
  charactersPage: any,
  charactersSearch: CharactersListState;
  charactersLength: any;
}
