import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { fetchEvents } from '../../redux/modules/events';
import styles from '../../constants/styles';
import { autobind } from "core-decorators";
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Event from './Event';

@connect(state => ({
  loading: state.events.loading,
  events:  state.events.events,
  error:   state.events.error
}), { fetchEvents })

@autobind
export default class EventList extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    let events = this.props.events.map((event, id) => <Event key={event.id} event={event} id={id} />);
    let loading = <Text>Loading...</Text>;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{alignItems: 'stretch'}}>
          {this.props.loading ? loading : events}
        </ScrollView>
      </View>
    );
  }
}
