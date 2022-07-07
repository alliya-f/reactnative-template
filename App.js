import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/navigation';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
// import {APP_ENVIRONMENT} from '@env';

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
