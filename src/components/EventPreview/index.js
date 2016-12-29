/**
 * @providesModule ComponentEventPreview
 */

import { TouchableOpacity, Text, StyleSheet, View, Image, WebView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { flex, margin, padding } from 'styleMixins'
import Button from 'ComponentGradientButton'
import React, { Component } from 'react'
import fontStyle from './fontStyleBin'
import Remarkable from 'remarkable'

var markdown = new Remarkable({
  typographer:  true
});

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFF',
    overflow: 'hidden',
    ...margin(20, 15),
    borderRadius: 8,
  },

  image: {
    height: 250
  },

  title: {
    borderBottomWidth: 1,
    textAlign: 'center',
    fontFamily: 'Rubik',
    fontWeight: '300',
    marginTop: 10,
    fontSize: 17,
  },

  preview: {
    borderColor: 'rgba(0,0,0, 0.1)',
    ...margin(10, 10),
    borderTopWidth: 1,
    paddingTop: 15,
    height: 215
  },

  preview__body: {
    height: 200
  }
})

export default EventPreview = ({ onPress, event: { title, description, id, image, participants } }) => (
  <View style={styles.root}>
    <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
    <Text style={styles.title}>{title}</Text>

    <View style={styles.preview}>
      <WebView scrollEnabled={false} source={{html: `
        <style>
          ${fontStyle}

          * {
            color: rgba(0,0,0, 0.75);
            font-family: rubiklight;
          }
        </style>

        <div class="main">
          ${markdown.render(description)}
        </div>
      `}} style={styles.preview__body} />
    </View>
    <View style={styles.participants}>
      <Text style={styles.participants__text}></Text>
    </View>
    <Button onPress={onPress} text="Смотреть" />
  </View>
)