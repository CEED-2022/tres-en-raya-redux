import Cell from './Cell'
import { useSelector } from 'react-redux'

function Board() {

  const board = useSelector(state => state.board.tablero)

  return (
    <div className="board">
      {
        board.map((row, i) => {
          return row.map((cell, j) => {
            return (
              <Cell contenido={cell} key={i + '-' + j}
                    fila={i} columna={j}
              />
            )
          })
        })
      }
    </div>
  )
}

export default Board
