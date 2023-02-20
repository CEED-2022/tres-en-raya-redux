import { useDispatch } from 'react-redux'
import { setCell } from './features/boardSlice';

function Cell(props){
  const { contenido, fila, columna } = props;

  // dispatch de algo
  const dispatch = useDispatch()

  function onClick(){
    // Lanzar la acción
    const payload = {
      fila,
      columna,
      contenido: 'X'
    }
    const accion = setCell(payload)
    dispatch(accion)
  }

  return (
    <div className={"cell "+contenido?.toLowerCase() ?? ''}
        onClick={onClick}
    >
      {contenido}
    </div>
  )
}

export default Cell
