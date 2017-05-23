import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import I18n from '../../utils/translations';
import { fetchEvent } from '../../actions/events';
import { RenderActivityIndicator } from '../shared/RenderActivityIndicator';
import colors from '../../constants/colors';
import EventItems from './EventItems';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  descriptionContainer: {
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  image: {
    marginTop: 0,
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
        position: 'absolute',
        backgroundColor: colors.BLACK_OPACITY,
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
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

    if (isStarted && isFetching) return <RenderActivityIndicator />;
    return (
      <View>
        <Image source={{ uri: event.image }} style={styles.image} />
        <View style={styles.descriptionContainer}>
          <Text>{event.description}</Text>
        </View>
      </View>
    );
  }

  renderEventItems() {
    const { isStarted, isFetching, event } = this.props;

    if (isStarted && isFetching) return <RenderActivityIndicator />;
    return <EventItems items={event.items} />;
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderEvent()}
        {this.renderEventItems()}
      </ScrollView>
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
