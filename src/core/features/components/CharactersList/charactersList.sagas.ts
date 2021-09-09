import { SagaIterator } from 'redux-saga';

import { call, put } from 'redux-saga/effects';

import { CharactersActionsTypes } from './charactersList.actions';
import { getAllCharacters } from '../../../api/api';

function* charactersLoad(): SagaIterator {
  const data = yield call(getAllCharacters);
  yield put({ type: CharactersActionsTypes.LOAD_DEFAULT, payload: data.results });
}

export default charactersLoad;
