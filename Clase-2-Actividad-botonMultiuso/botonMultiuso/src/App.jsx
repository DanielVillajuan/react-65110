import './App.css'
import { Button } from './components/Button';


function App() {
  
  // Funcion del evento onClick. Lanza una Alerta.
  const onClick = () => {
    alert("Hola, a presionado el boton")
  };

  // Renderizacion del componente.
  return (
    <div>
      <Button
        placeholder="Ingrese un numero"
        label="Click en el Boton"
        color="Red"
        onClick={onClick}
      />
    </div>
  );
}


export default App
