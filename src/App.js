import React, {Component} from 'react';
import {Provider} from 'react-redux';

import store from './redux';
import Navigator from './containers/Navigator';

const App = () =>
    <Provider store={store}>
      <Navigator />
    </Provider>;

export default App;
