import { flex, margin, padding, boxShadow } from 'styleMixins'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    ...boxShadow('#000', 2, 2, 0.6, 5),
    backgroundColor: '#FFF',
    ...margin(20, 20),
    borderRadius: 0,
  },

  image: {
    height: 150
  },
  
  title: {
    ...padding(15, 10)
  },

  title__text: {
    color: 'rgba(0,0,0, 0.8)',
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 16,
  },

  started: {
    ...flex('row', 'center', 'flex-start'),
    marginTop: 5
  },

  started__text: {
    color: 'rgba(0,0,0, 0.7)',
    fontFamily: 'Roboto',
    fontWeight: '400',
    marginLeft: 6,
    fontSize: 14,
  },

  preview: {
    borderColor: 'rgba(0,0,0, 0.1)',
    borderTopWidth: 1,
    ...margin(0, 10),
    paddingTop: 5,
    height: 150
  },

  preview__body: {
    height: 150
  },

  button: {
    ...boxShadow('#000', -1, -2, 0.2, 3),
    ...padding(15, 15),
    borderRadius: 0,
    marginTop: 10,
  }
})