import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from 'reducers'

import {
  applyMiddleware,
  createStore,
} from 'redux'

export default function confugureStore() {
  const store = createStore(reducers, applyMiddleware(logger, thunk))
  return store
}