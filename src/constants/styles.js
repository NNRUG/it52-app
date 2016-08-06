// Common styles go here, including constants for colors, common font settings, etc
import {
  StyleSheet
} from 'react-native';

const Layout = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  }
});

const EventView = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  }
});

const Toolbar = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: '#797979',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,

    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 0
    }
  },
  title: {
    color: 'rgba(255, 255, 255, 0.75)',
    marginHorizontal: 10,
    marginVertical: 15,
    fontWeight: '400'
  },
  button: {
    marginHorizontal: 15,
    marginVertical: 12,
  }
});

export {
  EventView,
  Layout,
  Toolbar
}
