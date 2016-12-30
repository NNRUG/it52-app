/**
 * @providesModule ContainerWelcome
 */

import LinearGradient from 'react-native-linear-gradient'
import { routePush } from 'actionsNavigation'
import Button from 'ComponentGradientButton'
import autobind from 'autobind-decorator'
import React, { Component } from 'react'
import { homePage } from 'configPages'
import { connect } from 'react-redux'
import { db } from 'apiDatabase'

import {
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
  View
} from 'react-native'

import styles from './styles'

const { height, width } = Dimensions.get('window')

var slide__image__size__style = { width, height, paddingTop: height/3.6 }
var slide__info__margin = { marginBottom: height/16 }

@connect((state) => ({
  ...state.common
}))

@autobind
class WelcomePage extends Component {
  onDone() {
    var { dispatch } = this.props

    db.write(() => {
      db.create('Config', { alreadyLaunched: true })
      dispatch(routePush(homePage))
    })
  }

  render() {
    return (
      <View style={styles.root}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={styles.header}>
          <Text style={styles.header__text}>Нижегородское IT Сообщество</Text>
        </View>

        <Button colors={['#9E9E9E', '#9E9E9E']} styles={styles.button} onPress={this.onDone} text="Начать Сейчас" />
      </View>
    )
  }
}

export default WelcomePage