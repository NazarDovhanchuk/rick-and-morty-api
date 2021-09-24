/* eslint-disable @typescript-eslint/no-unused-vars */
import { SagaIterator } from 'redux-saga';

import {
  call, delay, put, takeEvery,
} from 'redux-saga/effects';
import { getCharactersAPI } from '../../../api/api';
import { CharactersSearch, getSearch, setSearch } from './charactersSearch.actions';

function* getSearchSaga({ payload }: ReturnType<typeof getSearch>): SagaIterator {
  const data = yield call(getCharactersAPI, payload);
  yield delay(1000);
  yield put(setSearch({ charasters: data.results, loading: true }));
}

export function* seacrhWatcher():SagaIterator {
  yield takeEvery(CharactersSearch.LOAD_SEARCH, getSearchSaga);
}
