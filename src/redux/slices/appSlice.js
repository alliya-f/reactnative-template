import {createSlice} from '@reduxjs/toolkit';
import Toast from 'react-native-simple-toast';
import {loginUser} from '../thunks/appThunk';

import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isInitialized: false,
  user: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initializeApp: state => {
      state.isInitialized = true;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, {payload}) => {
      AsyncStorage.multiSet([
        ['accessToken', payload.token.access],
        ['refreshToken', payload.token.refresh],
      ]).catch(err => {
        const error = 'Error setting access and refresh token in async';
        Toast.show(error, Toast.LONG);
        console.log(error, err);
      });
    },
    [loginUser.rejected]: () => {
      Toast.show('something went wrong', Toast.LONG);
    },
  },
});

// Action creators are generated for each case reducer function
export const {initializeApp} = appSlice.actions;

export default appSlice.reducer;
