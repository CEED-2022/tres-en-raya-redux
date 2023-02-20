import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  board: [
    ['X', 'O', null],
    [null, null, null],
    [null, null, null],
  ]
}

export const boardSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
  },
})
