// Common styles go here, including constants for colors, common font settings, etc
import {
  StyleSheet
} from 'react-native';

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
    elevation: 4,
    height: 50,
  }
});

export {
  EventView,
  Toolbar
}
