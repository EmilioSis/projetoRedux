import React from 'react';
import {PersistGate} from 'redux-persist/es/integration/react';
import Login from './src/pages/login';
import Teste from './src/pages/Teste';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Teste />
        </PersistGate>
      </Provider>
    </>
  );
}
