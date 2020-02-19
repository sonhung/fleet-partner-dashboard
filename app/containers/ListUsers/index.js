/*eslint-disable */
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { isEmpty } from 'lodash';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import sagas from 'sagas';
import listUsersReducer from './reducer';
import { listUsers } from './actions';
import { makeSelectUser } from './selectors';

const key = 'listusers';

export const ListUsersContext = React.createContext('');

const ListUsers = ({ listUsers = [], onLoadUser }) => {
  useInjectReducer({ key, reducer: listUsersReducer });
  useInjectSaga({ key, saga: sagas });
  useEffect(() => {
    // load user at the very first
    if (isEmpty(listUsers)) onLoadUser();
  }, [listUsers]);
  return (
    <article>
      <Helmet>
        <title>List Users</title>
      </Helmet>
      <div>
        {listUsers.map((item, i) => <div key={i}>{item.id}</div>)}
      </div>
    </article>
  );
}

ListUsers.propTypes = {
  listUsers: PropTypes.array,
  onLoadUser: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  listUsers: makeSelectUser(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadUser: () => { dispatch(listUsers()); },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ListUsers);
