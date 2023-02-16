
function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function randomPosition() {
  return {
    row: Math.floor(Math.random() * 3),
    col: Math.floor(Math.random() * 3),
  }
}

function nextMove(board) {
  let { row, col } = randomPosition()

  let element = board[row][col];
  while (element !== null) {
    const { row, col } = randomPosition()
    element = board[row][col];
  }
  return { row, col }
}

function computerMove(board) {
  const timeout = randomIntFromInterval(1000, 3000)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(nextMove(board))
    }, timeout)
  })
}

export default computerMove
