import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiPost} from '../../services/apiService';

export const loginUser = createAsyncThunk(
  'appThunk/loginUser',
  async (payload, {rejectWithValue}) => {
    console.log('payload: ', payload);
    const response = await apiPost('auth/token/', payload);

    if (response.status === 200) return await response.json();
    else return rejectWithValue(await response.json());
  },
);
