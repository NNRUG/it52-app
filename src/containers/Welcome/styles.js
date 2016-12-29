import { flex, margin, padding } from 'styleMixins'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    ...flex('column', 'center', 'center'),
    backgroundColor: '#FAFAFA',
    flex: 1
  },

  header__text: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 60,
  },

  subheader__text: {
    color: 'rgba(0, 0, 0, 0.65)',
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 16,

    marginTop: 15
  },

  button: {
    marginTop: 35
  }
})