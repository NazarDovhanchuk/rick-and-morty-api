import { SagaIterator } from 'redux-saga';

import {
  call, put, takeEvery,
} from 'redux-saga/effects';

import {
  CharactersAllTypes, getCharacters, setCharacters, setLength,
} from './charactersList.actions';
import { getCharactersAPI } from '../../../api/api';

function* getCharactersSaga({ payload }: ReturnType<typeof getCharacters>): SagaIterator {
  const data = yield call(getCharactersAPI, payload);

  yield put(setCharacters(data.results));
  yield put(setLength(data.info.pages));
}

export function* charactersWatcher():SagaIterator {
  yield takeEvery(CharactersAllTypes.LOAD_CHARACTER, getCharactersSaga);
}
