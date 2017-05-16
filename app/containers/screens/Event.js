import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { fetchEvent } from '../../actions/events';

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
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
      headerTitle: `${navigation.state.params.item.attributes.name}`,
    };
  }

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
        <Text>{event.name}</Text>
        <Text>{event.description}</Text>
        <Text>{event.image}</Text>
        <Image source={{ uri: event.image }} style={styles.image} />
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