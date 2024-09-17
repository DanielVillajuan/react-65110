import { useState } from "react";

export const Button = (props) => {
  // todo compenente recibe un objeto llamado props
  const [counter, setCounter] = useState(0); // retorna un array 2 elemento [ element1 , elemento ]
  // hooks -> useState
  // hooks custom -> useCustomHooks
  const handleClick = () => {
    setCounter(counter + 1);
  };
  console.log(props);
  return (
    <>
      <button className="border-rojo" onClick={handleClick}>
        {props.texto}
      </button>
      <small>Valor del counter: {counter}</small>
      <Table productos={[]} />
    </>
  );
};

export const Container = () => {
  const [products, setProducts] = useState([]);

  return <ProductList products={products} />;
};

export const Card = () => {
  return <></>;
};

export const Table = (props) => {
  const productos = props.productos;
  return productos.map((el) => <></>);
};

export default function Avatar() {
  return <></>;
}
