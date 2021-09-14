import { SagaIterator } from 'redux-saga';

import {
  call, put, takeEvery,
} from 'redux-saga/effects';

import { CharactersAllTypes, getCharacters, setCharacters } from './charactersList.actions';
import { getCharactersAPI } from '../../../api/api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* getCharactersSaga({ payload }: ReturnType<typeof getCharacters>): SagaIterator {
  const data = yield call(getCharactersAPI, payload);
  yield put(setCharacters(data.results));
}

export function* charactersWatcher():SagaIterator {
  yield takeEvery(CharactersAllTypes.LOAD_CHARACTER, getCharactersSaga);
}
