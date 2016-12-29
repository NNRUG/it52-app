import { flex, margin, padding } from 'styleMixins'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    ...flex('column', 'center', null),
    flex: 1
  },

  root__loading: {
    ...flex('row', 'center', 'center'),
    flex: 1
  },

  root__loading__text: {
    backgroundColor: 'transparent',
    color: 'rgba(0,0,0, 0.75)',
    fontFamily: 'Rubik',
    fontWeight: '300',
    fontSize: 25,
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