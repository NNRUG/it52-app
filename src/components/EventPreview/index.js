/**
 * @providesModule ComponentEventPreview
 */

import Icon from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import Button from 'ComponentGradientButton'
import { getContent } from 'utilsMarkdown'
import React, { Component } from 'react'

import { TouchableOpacity, Text, View, Image, WebView } from 'react-native'
import styles from './styles'

/* moment load & preset russian locale */
import moment from 'moment'
import 'moment/locale/ru'
moment.locale('ru')

export default EventPreview = ({ onPress, event: { title, description, id, image, participants, started_at } }) => (
  <View style={styles.root}>
    <Image
      source={{ uri: image }}
      style={styles.image}
      resizeMode="cover"
    />
    
    <View style={styles.title}>
      <Text style={styles.title__text}>
        {title.toUpperCase()}
      </Text>
      
      <View style={styles.started}>
        <Icon name="date-range" color="rgba(0,0,0, 0.75)" size={16} />
        <Text style={styles.started__text}>{moment(started_at).format('LL')}</Text>
      </View>
    </View>

    <View style={styles.preview}>
      <WebView
        source={{html: getContent(description)}}
        style={styles.preview__body}
        scrollEnabled={false}
      />
    </View>
    
    <View style={styles.participants}>
      <Text style={styles.participants__text}></Text>
    </View>
    
    <Button
      colors={['#b15753', '#cc554f']}
      styles={styles.button}
      onPress={onPress}
      text="Смотреть"
    />
  </View>
)