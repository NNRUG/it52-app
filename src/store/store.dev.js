import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from 'reducers'

import {
  applyMiddleware,
  createStore,
  compose
} from 'redux'

const logger = createLogger();

export default function confugureStore() {
  const enhancer = compose(
    applyMiddleware(logger, thunk),
    
    global.reduxNativeDevTools ?
      global.reduxNativeDevTools(/*options*/) :
      noop => noop
  )

  const store = createStore(
    reducers,
    enhancer
  )

  if (global.reduxNativeDevTools) {
    global.reduxNativeDevTools.updateStore(store)
  }

  return store
}