import { flex, margin, padding } from 'styleMixins'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    ...padding(60, 0)
  },

  root__loading: {
    ...flex('row', 'center', 'center'),
    height: 400
  },

  root__loading__text: {
    backgroundColor: 'transparent',
    color: 'rgba(0,0,0, 0.75)',
    fontFamily: 'Rubik',
    fontWeight: '300',
    fontSize: 25,
  }
})