import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/styles.css'
import computerMove from './lib/server'
const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(<App />)

// async function foo() {
//   const board = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
//   ]
//   await computerMove(board)
// }
// foo().then(data => console.log)
