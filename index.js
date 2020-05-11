import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(() => (
  <Provider store={store}>
    <App />
  </Provider>
));
