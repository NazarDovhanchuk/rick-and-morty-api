/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AppState } from '../../../store/state';

export const getPage = (state: AppState): AppState => state.charactersPage;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getCharactersList = (state: AppState) => state.charactersReducer.charasters;
