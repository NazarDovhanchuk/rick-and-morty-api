/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AppState } from '../../../store/state';

export const getCharactersSearch = (state: AppState) => state.charactersSearch.charasters;
