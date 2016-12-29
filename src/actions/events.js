/**
 * @providesModule actionsEvents
 */

import each from 'async/each'

import {
  requestEventsWithCache
} from 'apiEvents'

import {
  createActions,
  createAction
} from 'redux-actions'

import {
  EVENTS_EXTEND_STORE,
  EVENTS_IS_LOADING
} from 'constants'

export const extendEvents = createAction(EVENTS_EXTEND_STORE)
export const isLoading = createAction(EVENTS_IS_LOADING)

export function prepareEvents () {
  return (dispatch) => {
    requestEventsWithCache()

    .then((events) => {
      var next = [], past = []

      each(events, (event, cb) => {
        var started = new Date(event.started_at).getTime(),
            now = new Date().getTime()

        if (started >= now) next.push(event)
        else past.push(event)

        cb()
      }, (err) => {
        Promise.all([
          dispatch(extendEvents({ next, past })),
          dispatch(isLoading(false))
        ])
      })
    })
  }
}