import {
  EVENTS_EXTEND_STORE,
  EVENTS_IS_LOADING
} from 'constants'

import {
  createActions,
  createAction,
  handleActions,
} from 'redux-actions'

const initialState = {
  loading: true,
  next: [],
  past: []
}

const reducer = handleActions({
  [EVENTS_EXTEND_STORE]: (state, { payload }) => ({
    ...state,
    ...payload
  }),

  [EVENTS_IS_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload
  })
}, initialState)

export default reducer