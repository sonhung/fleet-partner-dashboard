import { call, put } from 'redux-saga/effects';
import { listUsersLoaded } from './actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getListUsers() {
  const requestURL = `http://www.mocky.io/v2/5cdce5e4300000bb02e2336f`;
  console.log(';ajih')
  try {
    // Call our request helper (see 'utils/request')
    const listUsers = yield call(request, requestURL);
    yield put(listUsersLoaded(listUsers));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}
