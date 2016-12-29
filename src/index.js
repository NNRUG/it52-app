/**
 * @providesModule BootstrapApp
 */

import configureStore from 'configureStore'
import Navigator from 'ContainerNavigator'
import React, { Component } from 'react'
import { Provider } from 'react-redux'

const store = configureStore()

const container = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
)

export default container