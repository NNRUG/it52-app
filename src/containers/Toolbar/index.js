import {
  Image,
  ScrollView,
  StyleSheet,
  Animated,
  Text,
  View
} from 'react-native';

import { Toolbar as styles } from '../../constants/styles';
import { autobind } from "core-decorators";
import React, { Component } from 'react';
import {connect} from 'react-redux';

@connect(state => ({
  ...state
}))

@autobind
export default class Toolbar extends Component {
  render() {
    let {events, selectedId} = this.props;
    let event = events[selectedId];
    return (
      <Animated.View style={styles.container}>

      </Animated.View>
    );
  }
}
