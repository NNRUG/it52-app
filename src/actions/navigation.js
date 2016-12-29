/**
 * @providesModule actionsNavigation
 */

import {
  createActions,
  createAction
} from 'redux-actions'

import {
  NAVIGATION_JUMP_TO_INDEX,
  NAVIGATION_JUMP_TO_KEY,
  NAVIGATION_RESET,
  NAVIGATION_PUSH,
  NAVIGATION_POP
} from 'constants'

export const routeJumpToIndex = createAction(NAVIGATION_JUMP_TO_INDEX)
export const routeJumpToKey = createAction(NAVIGATION_JUMP_TO_KEY)
export const resetRoutes = createAction(NAVIGATION_RESET)
export const routePush = createAction(NAVIGATION_PUSH)
export const routePop = createAction(NAVIGATION_POP)