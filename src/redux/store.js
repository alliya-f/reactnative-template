import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistReducer} from 'redux-persist';

import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';

const reducers = combineReducers({
  app: appReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
