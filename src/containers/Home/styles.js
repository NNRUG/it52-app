import { flex, margin, padding } from 'styleMixins'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    backgroundColor: 'transparent',
    ...padding(60, 0)
  },

  root__loading: {
    ...flex('row', 'center', 'center'),
    height: 600
  },

  root__loading__text: {
    color: 'rgba(255,255,255, 0.75)',
    backgroundColor: 'transparent',
    fontFamily: 'Rubik',
    fontWeight: '300',
    fontSize: 25,
  }
})