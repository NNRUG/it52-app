import { Text, NavigationExperimental, Image } from 'react-native';
import React, { Component } from 'react';

const { CardStack: NavigationCardStack } = NavigationExperimental;

import { Layout as styles } from "../constants/styles";
import {push, pop} from '../redux/modules/navigation';
import { autobind } from "core-decorators";
import {connect} from 'react-redux';

import EventList from './EventList';
import EventView from './EventView';
import Toolbar from "./Toolbar";

@connect(state => {
  return {
    index: state.navigation.index,
    routes: state.navigation.routes
  };
}, { push, pop })

@autobind
export default class Navigation extends Component {
  render() {
    var { pop, index, routes } = this.props;

    var props = {
      navigationState: { index, routes },
      renderOverlay: this.renderToolbar,
      renderScene: this.routeRender,
      onNavigateBack: pop
    };

    return <NavigationCardStack {...props} />
  }

  renderToolbar(props) {
    return <Toolbar overlayProps={props} />;
  }

  routeRender(sceneProps){
    let { index, routes } = this.props;
    let sceneType = routes[index].type;

    var view;
    switch(sceneType) {
      case 'eventList':
        view = <EventList/>;
        break;
      case 'event':
        view = <EventView/>;
        break;
      default:
        view = <Text>Invalid route</Text>;
        break;
    }

    return <Image source={require('../assets/background.png')} style={styles.backgroundImage}>{view}</Image>;
  }
}
