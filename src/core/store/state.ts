/* eslint-disable @typescript-eslint/no-explicit-any */
import { CharactersListState } from '../features/components/CharactersList/charactersList.state';

export interface AppState {
  charactersReducer: CharactersListState;
  charactersPage: any,
  charactersSearch: any;
  charactersLength: any;
  charactersDetails: any;
}
