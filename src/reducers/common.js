import {
  COMMON_EXTEND_STORE
} from 'constants'

import {
  createActions,
  createAction,
  handleActions,
} from 'redux-actions'

const initialState = {

}

const reducer = handleActions({
  [COMMON_EXTEND_STORE]: (state, action) => ({
    ...state,
    ...action.payload
  }),
}, initialState)

export default reducer