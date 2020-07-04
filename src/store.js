//Tem como objetivo pegar todas as minhas reducers e enviar para o provider

import {createStore} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import Reducers from './reducers/index';

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userReducer'],
    //blacklist: [],
  },
  Reducers,
);
const store = createStore(persistedReducer);

let persistor = persistStore(store);

export default {store, persistor};
