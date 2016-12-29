import * as NavigationStateUtils from 'NavigationStateUtils'
import { homePage, welcomePage } from 'configPages'
import { handleActions } from 'redux-actions'
import { db } from 'apiDatabase'

import {
  NAVIGATION_JUMP_TO_INDEX,
  NAVIGATION_JUMP_TO_KEY,
  NAVIGATION_RESET,
  NAVIGATION_PUSH,
  NAVIGATION_POP
} from 'constants'

var configs = db.objects('Config')
var configDB = (configs.length > 0 ? configs[0] : { alreadyLaunched: false })

const routes = configDB.alreadyLaunched ? [homePage] : [welcomePage]

const initialState = {
	index: 0,
	routes
}

const reducer = handleActions({
  [NAVIGATION_JUMP_TO_INDEX]: (state, { payload }) => (NavigationStateUtils.jumpToIndex(state, payload)),
  
  [NAVIGATION_JUMP_TO_KEY]: (state, { payload }) => (NavigationStateUtils.jumpTo(state, payload)),

  [NAVIGATION_PUSH]: (state, { payload }) => {
		if (state.routes[state.index].key === (payload && payload.key)) return state
    return NavigationStateUtils.push(state, payload)
  },

  [NAVIGATION_POP]: (state, { payload }) => {
		if (state.index === 0 || state.routes.length === 1) return state
    return NavigationStateUtils.pop(state)
  },

  [NAVIGATION_RESET]: (state, { payload }) => ({
    ...state,
    ...payload
  })
}, initialState)

export default reducer