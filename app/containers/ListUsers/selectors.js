import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.listusers || initialState;
const makeSelectUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.listUsers,
  );

export { selectGlobal, makeSelectUser };