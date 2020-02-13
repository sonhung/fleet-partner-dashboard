import produce from 'immer';

import { LIST_USER_TYPE } from './constants';

export const initialState = {
  listUsers: []
};

/* eslint-disable default-case, no-param-reassign */
const listUsersReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LIST_USER_TYPE.GET_LIST_USERS:
        draft.loading = true;
        break;
      case LIST_USER_TYPE.LOAD_USERS_SUCCESS:
        draft.loading = false;
        draft.listUsers = action.listUsers;
        break;
    }
  });

export default listUsersReducer;
