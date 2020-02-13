import { call, put } from 'redux-saga/effects';
import { listUsersLoaded } from './actions';

import { makeGetRequest } from '../../utils/makeRequest';

export function* getListUsers() {
  const requestURL = `http://www.mocky.io/v2/5cdce5e4300000bb02e2336f`;
  try {
    const listUsers = yield call(makeGetRequest, requestURL);
    yield put(listUsersLoaded(listUsers));
  } catch (err) {
    // yield put(listUsersError(err));
  }
}
