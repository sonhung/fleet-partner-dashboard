import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { changeLocale } from './actions';
import { makeSelectLocale } from './selectors';

export function LocaleToggle(props) {
  return (
    <div>
      <button type="button" onClick={() => props.onChangeLocale('vi')}>
        vi
      </button>
      <button type="button" onClick={() => props.onChangeLocale('en')}>
        en
      </button>
    </div>
  );
}

LocaleToggle.propTypes = {
  onChangeLocale: PropTypes.func,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

export function mapDispatchToProps(dispatch) {
  return {
    onChangeLocale: value => dispatch(changeLocale(value)),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleToggle);
