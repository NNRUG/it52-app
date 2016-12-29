import { flex, margin, padding } from 'styleMixins'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    ...flex('row', 'center', 'center'),
    flex: 1
  },

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