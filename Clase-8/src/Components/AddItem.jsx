import { addDoc, collection } from "firebase/firestore";
import BBDD from "../config/firebase";

const AddItem = () => {
  const AddProduct = async () => {
    const collRef = collection(BBDD.db, "products");
    const doc = await addDoc(collRef, {
      description: "Harina",
      stock: 20,
      price: 800,
      status: true,
    });
    console.log("Se guardo el producto con el id -> ", doc.id);
  };

  return (
    <>
      <button onClick={AddProduct}>Agregar producto</button>
    </>
  );
};
export default AddItem;
