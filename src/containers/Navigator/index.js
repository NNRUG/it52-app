/**
 * @providesModule ContainerNavigator
 */

import { routePop } from 'actionsNavigation'
import autobind from 'autobind-decorator'
import React, { Component } from 'react'
import objectSwitch from 'objectSwitch'
import { connect } from 'react-redux'
import styles from './styles'

import {
  NavigationExperimental,
  Dimensions,
  StatusBar,
  Image,
  View,
  Text
} from 'react-native'

const {
	Transitioner: NavigationTransitioner,
	Header: NavigationHeader,
	Card: NavigationCard
} = NavigationExperimental

/* Pages */ 
import EventDetails from 'ContainerEventDetails'
import Another from 'ContainerAnother'
import Welcome from 'ContainerWelcome'
import Home from 'ContainerHome'

import {
  eventDetailsPage,
  welcomePage,
  anotherPage,
  homePage,
  keyPage
} from "configPages"

const { height, width } = Dimensions.get('window')

@connect((state) => ({
  ...state
}))

@autobind
class Navigator extends Component {
  render() {
    var { navigation, dispatch } = this.props
    const backPage = () => dispatch(routePop())

    return (
      <NavigationTransitioner 
        navigationState={navigation}
        style={styles.root}
        render={(props) => (
          <View style={styles.root}>
            
            <NavigationCard {...props}
              renderScene={this._renderScene}
              key={props.scene.route.key}
              onNavigateBack={backPage}
            />

            <NavigationHeader {...props}
              style={styles.navigationHeader}
							onNavigateBack={backPage}
							renderTitleComponent={(props) => {
								const title = props.scene.route.title
								return (
                  <NavigationHeader.Title>
                    <Text style={styles.navigationHeader__title}>{title}</Text>
                  </NavigationHeader.Title>
                )
              }}
            />
          </View>
        )}
      />
    )
  }

  _renderScene({ scene }) {
    const { route } = scene

    var contentView = objectSwitch(route.key, {
      [keyPage(eventDetailsPage)]: <EventDetails type={route.eventType} index={route.eventIndex} />,
      [keyPage(anotherPage)]: <Another />,
      [keyPage(welcomePage)]: <Welcome />,
      [keyPage(homePage)]: <Home />,
    })

    var props = {
      source: require('../../assets/backgroundDefault.png'),
      style: { height, width },
      resizeMode: 'cover'
    }

    return (
      <Image {...props}>
        <StatusBar barStyle="light-content" />
        {contentView}
      </Image>
    )
  }
}

export default Navigator