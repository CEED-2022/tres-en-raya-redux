import Cell from './Cell'

function Board() {

  const board = [
    ['X', 'O', null],
    [null, null, null],
    [null, null, null],
  ]

  return (
    <div className="board">
      {
        board.map((row, i) => {
          return row.map((cell, j) => {
            return <Cell contenido={cell} key={i + '-' + j} />
          })
        })
      }
    </div>
  )
}

export default Board
