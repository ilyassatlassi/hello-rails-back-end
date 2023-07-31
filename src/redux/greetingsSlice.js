import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
/* eslint-disable */
const initialState = {
  greeting: '',
  error: null,
};

const url = 'http://127.0.0.1:3000/api/v1/random_greeting'

export const getGreetings = createAsyncThunk('greetings/getGreetings', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.message;
  } catch (error) {
    return error.message;
  }
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getGreetings.fulfilled,
      (state, action) => {
        state.greeting = action.payload;
      },
    );
    builder.addCase(
      getGreetings.rejected,
      (state, action) => {
        state.error = action.error.message;
      },
    );
  },
});

export default greetingsSlice.reducer;
