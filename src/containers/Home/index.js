/**
 * @providesModule ContainerHome
 */

import LinearGradient from 'react-native-linear-gradient'
import EventPreview from 'ComponentEventPreview'
import { routePush } from 'actionsNavigation'
import Button from 'ComponentGradientButton'
import { eventDetailsPage } from 'configPages'
import autobind from 'autobind-decorator'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  prepareEvents,
  isLoading
} from 'actionsEvents'

import {
  TouchableOpacity,
  ScrollView,
  Text,
  View
} from 'react-native'

import styles from './styles'

@connect((state) => ({
  common: state.common,
  events: state.events
}))

@autobind
class HomePage extends Component {

  constructor() {
    super()
  }

  componentDidMount() {
    var { events, dispatch } = this.props

    setTimeout(() => {
      if (events && events.past.length+events.next.length <= 0) dispatch(prepareEvents())
      else dispatch(isLoading(false))
    }, 300)
  }

  render() {
    var { loading, past } = this.props.events
    var { dispatch } = this.props

    var getHandleRouteDetails = (index) => (e) => Promise.all([
      dispatch(isLoading(true)),

      dispatch(routePush({
        ...eventDetailsPage,
        eventIndex: index,
        eventType: 'past'
      }))
    ])

    return (
      <ScrollView contentContainerStyle={styles.root}>
        {loading ? (
          <View style={styles.root__loading}>
            <Text style={styles.root__loading__text}>
              Загружаем события...
            </Text>
          </View>
        ) : past.map((event, index) => (
          <EventPreview
            onPress={getHandleRouteDetails(index)}
            key={`event-show-${event.id}`}
            event={event} 
          />
        ))}
      </ScrollView>
    )
  }
}

export default HomePage