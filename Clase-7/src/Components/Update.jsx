// setDoc -> sobreescribe todo el documento
// updateDoc -> sobreescribe lo necesario, si no existe lo crea

import { doc, updateDoc } from "firebase/firestore";
import BBDD from "../config/firebase";

const UpdateItem = () => {
  const UpdateProduct = async () => {
    const docRef = doc(BBDD.db, "products", "zuzAOnEyv0mp7VeTmMCQ");
    await updateDoc(docRef, {
      description: "Papa",
      hasDisccount: true,
    });
    // deleteDoc(docRef) eliminamos el documento
    console.log("Modifado");
  };

  return (
    <>
      <button onClick={UpdateProduct}>Modifcar producto</button>
    </>
  );
};
export default UpdateItem;
