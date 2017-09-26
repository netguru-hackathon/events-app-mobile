import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import moment from 'moment';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import I18n from '../../utils/translations';
import colors from '../../constants/colors';

const { width } = Dimensions.get('window');

const Container = styled.View`
  flex-direction: row;
  padding: 5px;
  background-color: ${colors.WHITE};
`;

const EventImage = styled.Image`
  width: 50px;
  height: 50px;
  margin: 5px;
`;

const EventContent = styled.View`
  width: ${width - 70};
`;

const EventName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const EventDescription = styled.Text`
  font-size: 14px;
`;

const Separator = styled.View`
  height: 5px;
  margin-right: 15px;
  margin-left: 15px;
  background-color: ${colors.TRANSPARENT};
`;

class EventItems extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
  };

  renderEventItem = ({ item }) => (
    <Container>
      <EventImage source={{ uri: item.image }} />
      <EventContent>
        <EventName>{item.name}</EventName>
        <EventDescription
          ellipsizeMode="tail"
          numberOfLines={2}
        >
          {item.description}
        </EventDescription>
        <Text>
          {`${I18n.t('EventItems.startTime')}: `}
          {moment(new Date(item.startTime)).format('MMMM Do YYYY, HH:mm')}
        </Text>
        <Text>
          {`${I18n.t('EventItems.endTime')}: `}
          {moment(new Date(item.endTime)).format('MMMM Do YYYY, HH:mm')}
        </Text>
      </EventContent>
    </Container>
  )

  renderSeparator = () => <Separator />;

  render() {
    const { items } = this.props;

    return (
      <FlatList
        /* https://github.com/facebook/react-native/issues/13316 */
        removeClippedSubviews={false}
        data={items}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={this.renderEventItem}
      />
    );
  }
}

export default EventItems;
