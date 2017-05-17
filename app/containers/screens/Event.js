import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import I18n from '../../utils/translations';
import { fetchEvent } from '../../actions/events';
import colors from '../../constants/colors';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  image: {
    marginTop: -65,
    width,
    height: 0.25 * height,
  },
});

class Event extends Component {
  static propTypes = {
    fetchEvent: PropTypes.func.isRequired,
    isStarted: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    event: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
      state: PropTypes.object.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  static navigationOptions = (props) => {
    const { navigation } = props;

    return {
      tabBarLabel: I18n.t('events'),
      showIcon: true,
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../img/EventsIcon.png')}
          style={[styles.icon, { tintColor }]}
        />
      ),
      headerTitle: `${navigation.state.params.item.name}`,
      headerTintColor: colors.WHITE,
      headerStyle: {
        backgroundColor: colors.BLACK_OPACITY,
      },
    };
  };

  componentWillMount() {
    const { navigation } = this.props;

    this.props.fetchEvent(navigation.state.params.item.id);
  }

  // eslint-disable-next-line
  renderEvent() {
    const { isStarted, isFetching, event } = this.props;

    if (isStarted && isFetching) return <Text>Loading..</Text>;
    return (
      <View>
        <Image source={{ uri: event.image }} style={styles.image} />
        <View style={styles.container}>
          <Text>{event.description}</Text>
          <Text>{event.image}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.renderEvent()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isStarted: state.event.isStarted,
  isFetching: state.event.isFetching,
  event: state.event.item,
});

const mapDispatchToProps = {
  fetchEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
