import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RootNavigator from './RootNavigator';

const RootRouter = ({ isAuthenticated, uriPrefix }) => (
  <RootNavigator
    isAuthenticated={isAuthenticated}
    uriPrefix={uriPrefix}
  />
);

const mapStateToProps = state => ({ isAuthenticated: state.auth.isAuthenticated });

const mapDispatchToProps = {};

RootRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  uriPrefix: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);
