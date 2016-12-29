/**
 * @providesModule apiDatabase
 */

import Realm from 'realm'

const ConfigSchema = {
  name: 'Config',
  properties: {
    alreadyLaunched: {
      default: false,
      type: 'bool'
    }
  }
}

const EventSchema = {
  name: 'Event',
  properties: {
    participants: 'string', // JSON string of user ids
    description: 'string',
    started_at: 'string',
    place: 'string',
    image: 'string', // base64 image for cache
    title: 'string',
    url: 'string',
    id: 'int',
  }
}

const UserSchema = {
  name: 'User',
  properties: {
    avatar: 'string', // base64 image for cache
    nickname: 'string',
    website: 'string',
    social: 'string', // JSON with url social media
    bio: 'string',
    id: 'int',
  }
}

export const db = new Realm({ 
  schema: [
    ConfigSchema,
    EventSchema,
    UserSchema
  ]
})