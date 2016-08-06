import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { autobind } from "core-decorators";
import styles from '../../constants/styles';
import React, { Component } from 'react';
import {connect} from 'react-redux';

@connect(state => ({
  events:  state.events.events,
  selectedId: state.events.selectedId
}))

@autobind
export default class EventView extends Component {
  render() {
    let {events, selectedId} = this.props;
    let event = events[selectedId];
    return (
      <View style={styles.container}>
        <Text>{event.title}</Text>
        <Image source={{uri: event.image_url}}/>
        <Text>{event.description}</Text>
      </View>
    );
  }
}
