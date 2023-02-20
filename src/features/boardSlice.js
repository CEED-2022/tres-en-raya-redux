import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tablero: [
    ['X', 'O', null],
    [null, null, null],
    [null, null, null],
  ],
}

function setCellReducer(state, action) {
  const { fila, columna, contenido } = action.payload
  if(state.tablero[fila][columna] !== null) return

  state.tablero[fila][columna] = contenido
}

export const boardSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCell: setCellReducer,
  },
})

export const { setCell } = boardSlice.actions
