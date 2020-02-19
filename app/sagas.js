import { takeLatest, all } from 'redux-saga/effects';

// list types
import { LIST_USER_TYPE } from './containers/ListUsers/constants';
import { getListUsers } from './containers/ListUsers/saga';

export default function* root() {
  yield all([
    // get list users
    takeLatest(LIST_USER_TYPE.GET_LIST_USERS, getListUsers),
  ]);
}
