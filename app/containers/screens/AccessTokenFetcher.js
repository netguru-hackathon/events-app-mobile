import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { RenderActivityIndicator } from '../shared/RenderActivityIndicator';

// actions
import { authUser } from '../../actions/auth';

const Container = styled.View`
  flex: 1,
  justify-content: 'center',
  align-items: 'center',
`;

class AccessTokenFetcher extends Component {
  static propTypes = {
    authUser: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      state: PropTypes.object.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentWillMount() {
    const { navigation } = this.props;
    const { code } = navigation.state.params;

    this.props.authUser(code)
      .then(navigation.navigate('DashboardNavigator'))
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <RenderActivityIndicator />
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  authUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccessTokenFetcher);
