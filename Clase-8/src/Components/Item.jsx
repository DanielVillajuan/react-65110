import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import BBDD from "../config/firebase";
// doc
// getDoc

const Item = () => {
  const [item, setItem] = useState(null); // null.description
  useEffect(() => {
    const docRef = doc(BBDD.db, "products", "Bg7GHOs2bTv55A4oklK1");
    getDoc(docRef).then((snap) => {
      console.log(snap.data());
      setItem(snap.data());
    });
  }, []);
  return (
    <>
      {item && (
        <>
          <p>Nombre: {item.description}</p>
          <p>precio: {item.price}</p>
        </>
      )}
    </>
  );
};
export default Item;
