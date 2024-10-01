const Table = (props) => {
  console.log(props);
  return (
    <div style={{}}>
      <h1>{props.titulo}</h1>
      {props.children}
    </div>
  );
};

export default Table;
