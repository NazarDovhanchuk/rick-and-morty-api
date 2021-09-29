/* eslint-disable max-len */
import { AppState } from '../../../store/state';
import { CharactersItem } from './charactersList.state';

export const getCharactersList = (state: AppState): CharactersItem[] => state.charactersReducer.charasters;
export const getCharactersLength = (state: AppState): number => state.charactersLength;
