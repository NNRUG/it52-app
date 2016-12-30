/**
 * @providesModule ContainerEventDetails
 */

import Icon from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import { routePush } from 'actionsNavigation'
import Button from 'ComponentGradientButton'
import { getContent } from 'utilsMarkdown'
import { anotherPage } from 'configPages'
import autobind from 'autobind-decorator'
import React, { Component } from 'react'
import { connect } from 'react-redux'

/* moment load & preset russian locale */
import moment from 'moment'
import 'moment/locale/ru'
moment.locale('ru')

import {
  prepareEvents,
  isLoading
} from 'actionsEvents'

import {
  TouchableOpacity,
  ScrollView,
  WebView,
  Image,
  Text,
  View
} from 'react-native'

import styles from './styles'

@connect((state) => ({
  common: state.common,
  events: state.events
}))

@autobind
class EventDetails extends Component {

  constructor() {
    super()
  }

  render() {
    var { type, index, events } = this.props
    var event = events[type][index]

    return (
      <View style={styles.root}>
        <Image
            source={{ uri: event.image }}
            style={styles.image}
            resizeMode="cover"
          />
          
          <View style={styles.title}>
            <Text style={styles.title__text}>
              {event.title.toUpperCase()}
            </Text>
            
            <View style={styles.started}>
              <Icon name="date-range" color="rgba(0,0,0, 0.75)" size={16} />
              <Text style={styles.started__text}>{moment(event.started_at).format('LL')}</Text>
            </View>
          </View>

          <View style={styles.preview}>
            <WebView
              source={{html: getContent(event.description)}}
              style={styles.preview__body}
            />
          </View>
          
          <View style={styles.participants}>
            <Text style={styles.participants__text}></Text>
          </View>
          
          <Button
            colors={['#b15753', '#cc554f']}
            styles={styles.button}
            text="Участвовать"
          />
      </View>
    )
  }
}

export default EventDetails