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
  View,
  Text
} from 'react-native'

const {
	Transitioner: NavigationTransitioner,
	Header: NavigationHeader,
	Card: NavigationCard
} = NavigationExperimental

/* Pages */ 
import Another from 'ContainerAnother'
import Welcome from 'ContainerWelcome'
import Home from 'ContainerHome'

import {
  welcomePage,
  anotherPage,
  homePage,
  keyPage
} from "configPages"

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
							onNavigateBack={backPage}
							renderTitleComponent={(props) => {
								const title = props.scene.route.title
								return <NavigationHeader.Title>{title}</NavigationHeader.Title>
              }}
            />
          </View>
        )}
      />
    )
  }

  _renderScene({ scene }) {
    const { route } = scene

    return objectSwitch(route.key, {
      [keyPage(anotherPage)]: <Another />,
      [keyPage(welcomePage)]: <Welcome />,
      [keyPage(homePage)]: <Home />,
    })
  }
}

export default Navigator