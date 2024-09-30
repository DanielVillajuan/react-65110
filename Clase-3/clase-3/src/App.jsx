import "./App.css";
import Promises from "./Components/Promises";

function App() {
  // const [counter, setCounter] = useState(null);
  // const [alumno, setAlumno] = useState("");
  // const [alumnos, setAlumnos] = useState([]);

  // useEffect(() => {
  //   // cargo los alumnos
  //   //const data =  fetch
  //   // setAlumnos([]);
  //   return () => {
  //     console.log("Se desmonto el componente"); // se ejecuta cuando el componente se desmonta
  //   };
  // }, []); // se va a ejecutar cuando se monta el componente

  // useEffect(() => {
  //   console.log("Se ejecuto counter");
  //   // ejecutar otro set de otro estado
  //   //const data =  fetch(alumno seleccionado)
  // }, [alumno]); // actualizacion

  // console.log("Estoy fuera del useEffect y fuera del return");

  return (
    <>
      {/* <h1>Clase - 3</h1> */}
      {/* <Table titulo="Titulo desde las props de Table" data={alumnos} /> */}
      {/* <Perfil data={alumno} /> */}
      {/* <Counter count={counter} />
      <button onClick={() => setCounter(counter + 1)}>Click</button> */}
      <Title texto="Lista de alumnos">
        <Promises />
      </Title>
    </>
  );
}

export default App;
