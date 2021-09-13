import { SagaIterator } from 'redux-saga';

import {
  call, put, select, takeEvery,
} from 'redux-saga/effects';

import { setCharacters } from './charactersList.actions';
import { CharactersPaginationsTypes } from '../Pagination/pagination.actions';

import { getAllCharacters } from '../../../api/api';
import { getPage } from './charactersList.selector';

export function* charactersLoad(): SagaIterator {
  const page = yield select(getPage);
  const data = yield call(getAllCharacters, page);
  yield put(setCharacters(data.results));
}

export function* watchCharactersLoad(): SagaIterator {
  yield takeEvery(CharactersPaginationsTypes.PAGE, charactersLoad);
}
