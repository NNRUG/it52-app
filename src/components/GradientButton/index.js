/**
 * @providesModule ComponentGradientButton
 */

import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { flex, margin, padding } from 'styleMixins'
import React, { Component } from 'react'

const _styles = StyleSheet.create({
  button: {
    ...flex('row', 'center', 'center'),
    ...padding(9, 15),
    borderRadius: 3
  },

  button__text: {
    backgroundColor: 'transparent',
    color: '#FFF',
    fontSize: 14
  }
})

export default GradientButton = ({ onPress, colors, styles, text }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={(onPress ? onPress : (event) => {})}>
    <LinearGradient colors={(colors ? colors : ['#1ad6fd', '#1d62f0'])} style={[_styles.button, styles]}>
      <Text style={_styles.button__text}>{text}</Text>
    </LinearGradient>
  </TouchableOpacity>
)