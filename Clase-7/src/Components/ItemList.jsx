// getDocs
// collection

import { collection, getDocs } from "firebase/firestore";
import BBDD from "../config/firebase";
import { useEffect, useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const collectionsRef = collection(BBDD.db, "products");
    getDocs(collectionsRef).then((snaps) => {
      const { docs } = snaps;
      const list = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(list); //
      setItems(list);
    });
  }, []);
  return (
    <>
      <h1>Item List</h1>
      {items.map((item) => (
        <div key={item.id}>
          <p>Nombre: {item.description}</p>
          <p>precio: {item.price}</p>
          <button onClick={() => addCart(item.id)}>Agregar Carrito</button>
        </div>
      ))}
    </>
  );
};

export default ItemList;
