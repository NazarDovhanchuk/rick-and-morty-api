import { CharactersListState } from '../features/components/CharactersList/charactersList.state';

export interface AppState {
  charactersReducer: CharactersListState;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  charactersPage: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  charactersSearch: any;
}
