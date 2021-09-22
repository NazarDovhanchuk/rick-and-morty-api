/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AppState } from '../../../store/state';

export const getCharactersList = (state: AppState) => state.charactersReducer.charasters;
