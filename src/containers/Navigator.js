import { Text, NavigationExperimental } from 'react-native';
import React, { Component } from 'react';

const { CardStack: NavigationCardStack } = NavigationExperimental;
const { Header } = NavigationExperimental;

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
      renderOverlay: () => <Toolbar />,
      renderScene: this.routeRender,
      onNavigateBack: pop
    };

    return <NavigationCardStack {...props} />
  }

  routeRender(sceneProps){
    let { index, routes } = this.props;
    let sceneType = routes[index].type;
    switch(sceneType) {
      case 'eventList': return <EventList/>;
      case 'event': return <EventView/>;
      default: return <Text>Invalid route</Text>;
    }
  }
}
