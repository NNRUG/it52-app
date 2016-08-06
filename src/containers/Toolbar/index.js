import {
  NavigationExperimental,
  ScrollView,
  StyleSheet,
  Animated,
  Image,
  Text,
  View
} from 'react-native';

import { IconToggle, Icon } from "react-native-material-design";

import { Toolbar as styles } from '../../constants/styles';
import { autobind } from "core-decorators";
import React, { Component } from 'react';
import {connect} from 'react-redux';
import locale from "../../api/locale";

const { Header } = NavigationExperimental;

@connect(state => ({
  ...state
}))

@autobind
export default class Toolbar extends Component {
  buttonLeft(props) {
    return (
      <View style={styles.button}>
        <IconToggle color="#FFF">
          <Icon name="menu" color="#FFF" size={25} />
        </IconToggle>
      </View>
    );
  }

  getTitle(props) {
    const { route } = props.scene;
    var title = locale(route.type).toUpperCase();

    return (
      <View>
        <Text accessibilityLabel={title} style={styles.title}>
          {title}
        </Text>
      </View>
    );
  }

  render() {
    var { overlayProps } = this.props;

    var props = {
      ...overlayProps,
      renderLeftComponent: this.buttonLeft,
      renderTitleComponent: this.getTitle,
      style: styles.container,
    };

    return <Header {...props} />;
  }
}
