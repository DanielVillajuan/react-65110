import "./App.css";
import { Button } from "./Components/Button/Button";

function App() {
  const texto = "click aca!";
  const color = "blue";
  const handleClick = () => {
    console.log("Click desde el componente padre");
  };
  return (
    <div>
      <nav></nav>
      <Continer />
      <fotter></fotter>
      <Button texto={texto} color={color} onClick={handleClick} />
    </div>
  );
}

export default App;
