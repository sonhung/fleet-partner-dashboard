import { LIST_USER_TYPE } from './constants';

export function listUsers() {
  return {
    type: LIST_USER_TYPE.GET_LIST_USERS,
  };
}

export function listUsersLoaded(data) {
  return {
    type: LIST_USER_TYPE.LOAD_USERS_SUCCESS,
    listUsers: data,
  };
}
