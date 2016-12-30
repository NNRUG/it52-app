import { flex, margin, padding, boxShadow } from 'styleMixins'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    ...flex('column', 'center', 'center'),
    flex: 1
  },

  header__text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    // fontFamily: 'Roboto',
    fontWeight: '300',
    fontSize: 20,
  },

  button: {
    ...boxShadow('#000', 1, 1, 0.2, 3),
    marginTop: 35
  },

  logo: {
    height: 150, width: 150,
    marginBottom: 25
  }
})