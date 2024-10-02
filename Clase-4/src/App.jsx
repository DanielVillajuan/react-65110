import "./App.css";
import HOC from "./Components/HOC";
import Promises from "./Components/Promises";

const TodoList = (data) => {
  return (
    <ul>
      {data.map((d) => (
        <li>Titulo: {d.description}</li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <>
      <Promises />
      <HOC
        Component={TodoList}
        url="https://rickandmortyapi.com/api/character"
      />
      <HOC
        Component={TodoList}
        url="https://rickandmortyapi.com/api/location"
      />
    </>
  );
}

export default App;
