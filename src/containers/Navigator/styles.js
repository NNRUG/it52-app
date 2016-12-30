import { flex, margin, padding, boxShadow } from 'styleMixins'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    flex: 1
  },

  navigationHeader: {
    borderColor: 'rgba(255,255,255, 0.1)',
    ...boxShadow('#000', 1, 2, 0.4, 3),
    backgroundColor: '#2D2D2D',
    borderWidth: 1,
  },

  navigationHeader__title: {
    fontWeight: '300',
    color: '#FFF'
  }
})