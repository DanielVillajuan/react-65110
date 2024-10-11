import { Button } from "./Button"
import { useState } from "react";
import { ItemList } from "./ItemList";

// Componente State Component. Componente conteneddeer y logico.

export const Contenedor = () => {
    //Estados: Color y contador.
    const [color, setColor] = useState(0);
    const [counter, setCounter] = useState(0);

    const handleOnChange = (e) => {
        setColor(e.target.value);
    };

    const handleClickMas = () => {
        setCounter(counter + 1)
    }

    const handleClickMenos = () => {
        if (counter <= 1) {
            setCounter(1)
        } else {
            setCounter(counter - 1)
        }

    }

    // Funcion del evento onClick. Lanza una Alerta.
    const onClick = () => {
        alert("Hola, a presionado el boton")
    };
    return (

        <div>
            <Button
                placeholder="Ingrese un color"
                label="Click en el Boton"
                color={color}
                onClick={onClick}
                onChange={handleOnChange}
            />
            <ItemList onClickMas={handleClickMas} onClickMenos={handleClickMenos} contador={counter} />
        </div>

    )
}