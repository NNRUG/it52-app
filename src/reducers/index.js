/**
 * @providesModule reducers
 */

import { combineReducers } from 'redux'

import { default as navigation } from './navigation'
import { default as events } from './events'
import { default as common } from './common'

export default combineReducers({
  navigation,
  events,
  common
})