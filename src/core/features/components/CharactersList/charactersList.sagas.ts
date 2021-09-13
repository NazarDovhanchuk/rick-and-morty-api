import { SagaIterator } from 'redux-saga';

import { call, put } from 'redux-saga/effects';

import { CharactersAllTypes } from './charactersList.actions';
import { getAllCharacters } from '../../../api/api';

export function* loadDefault(): SagaIterator {
  const data = yield call(getAllCharacters);
  yield put({ type: CharactersAllTypes.LOAD_SUCCESS, payload: data.results });
}
