/**
 * @providesModule apiEvents
 */

import RNFetchBlob from 'react-native-fetch-blob'
import { db } from 'apiDatabase'
import Promise from 'bluebird'

const fs = RNFetchBlob.fs

export function _loadAndConvertImage(url) {
  var path = null

  return RNFetchBlob.config({ fileCache: true })
    .fetch('GET', url)
    
    .then((response) => {
      path = response.path()
      return response.readFile('base64')
    })
    
    .then((base64image) => Promise.all([
      `data:${url.split('.').pop()};base64,${base64image}`,
      fs.unlink(path)
    ]))
    
    .then(result => result[0])
}

export function _mapCacheEvent (event) {
  return new Promise((resolve, reject) => {
    var cachedEvent = db.objects('Event').filtered(`id = ${event.id}`)['0']
    
    if (cachedEvent) {
      var keys = Object.keys(cachedEvent), formatted = {}
      keys.forEach(key => formatted[key] = cachedEvent[key])

      return resolve(formatted)
    } else {
      _loadAndConvertImage(event.image_url)
      
      .then((base64image) => {
        var formatted = {
          participants: JSON.stringify(event.participants.map(user => user.id)),
          description: event.description,
          started_at: event.started_at,
          place: event.place,
          image: base64image,
          title: event.title,
          url: event.url,
          id: event.id
        }

        db.write(() => {
          db.create('Event', formatted)
          resolve(formatted)
        })
      })
    }
  })
}

export function requestEventsWithCache () {
  return fetch('https://it52.info/api/v1/events')
    .then((response) => response.json())
    .then((events) => {
      var mappedEvents = events.map(event => _mapCacheEvent(event))
      return Promise.all(mappedEvents)
    })
}