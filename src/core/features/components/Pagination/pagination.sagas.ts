import { SagaIterator } from 'redux-saga';

import {
  call, takeEvery,
} from 'redux-saga/effects';

import { CharactersActionsTypes } from './pagination.actions';
import { getAllCharacters } from '../../../api/api';

function* setPageCharacters(): SagaIterator {
  const result = yield call(getAllCharacters, 12);

  // eslint-disable-next-line no-console
  console.log(result);
}

export function* setPage(): SagaIterator {
  yield takeEvery(CharactersActionsTypes.PAGE, setPageCharacters);
}

export default setPageCharacters;
