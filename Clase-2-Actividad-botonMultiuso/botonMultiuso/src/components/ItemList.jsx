// Stateless Component. Componenete de Presentacion, es estetico y repetitivo, es un Boton.

export const ItemList = ({ onClickMas, onClickMenos, contador }) => {

    return (
        <div>
            <label>Producto</label>
            <div>
                <button onClick={onClickMenos}>-</button>
                <span>{contador}</span>
                <button onClick={onClickMas}>+</button>
            </div>
        </div>
    );
};

