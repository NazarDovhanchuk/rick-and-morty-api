// function* getCharactersSaga({ payload }: ReturnType<typeof getCharacters>): SagaIterator {
//   const data = yield call(getCharactersAPI, payload);
//   yield put(setCharacters(data.results));
//   yield put(setLength(data.info.pages));

import { SagaIterator } from '@redux-saga/types';
import {
  call, put, takeEvery,
} from 'redux-saga/effects';
import { getCharactersByID } from '../../../api/api';
import { CharactersPageTypes, setDetails, setID } from './charactersPage.actions';

function* getDetailsSaga({ payload }: ReturnType<typeof setID>): SagaIterator {
  const data = yield call(getCharactersByID, payload);

  yield put(setDetails(data));
}

export function* detailsWatcher():SagaIterator {
  yield takeEvery(CharactersPageTypes.DETAILS, getDetailsSaga);
}
