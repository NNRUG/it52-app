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
    ...padding(12, 18),
    borderRadius: 8
  },

  button__text: {
    backgroundColor: 'transparent',
    color: '#FFF',
    fontSize: 16
  }
})

export default GradientButton = ({ onPress, colors, styles, text }) => (
  <TouchableOpacity style={styles} activeOpacity={0.8} onPress={(onPress ? onPress : (event) => {})}>
    <LinearGradient colors={(colors ? colors : ['#1ad6fd', '#1d62f0'])} style={_styles.button}>
      <Text style={_styles.button__text}>{text}</Text>
    </LinearGradient>
  </TouchableOpacity>
)