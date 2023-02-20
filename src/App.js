import Board from "./Board"
import { store } from "./features/store"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <Board/>
    </Provider>
  )
}

export default App

