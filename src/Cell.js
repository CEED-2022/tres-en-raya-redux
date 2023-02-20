function Cell(props){
  const { contenido } = props;

  return (
    <div className={"cell "+contenido?.toLowerCase() ?? ''}>
      {contenido}
    </div>
  )
}

export default Cell
