import { SagaIterator } from 'redux-saga';

import {
  call, put, select, takeEvery,
} from 'redux-saga/effects';

import { setCharacters } from '../CharactersList/charactersList.actions';
import { CharactersPaginationsTypes } from './pagination.actions';

import { getAllCharacters } from '../../../api/api';
import { getPage } from './pagination.selector';

export function* charactersLoad(): SagaIterator {
  const page = yield select(getPage);
  const data = yield call(getAllCharacters, page);
  yield put(setCharacters(data.results));
}

export function* watchCharactersLoad(): SagaIterator {
  yield takeEvery(CharactersPaginationsTypes.PAGE, charactersLoad);
}
