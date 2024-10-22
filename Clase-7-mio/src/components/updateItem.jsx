import { db } from "../config/firebase";
import { collection, deleteDoc, updateDoc } from "firebase/firestore";

export const UpdateItem = () => {

    const updateProduct = async () => {
        const id = "RBIYIUMolX9kQE3uWdUe"
        const collRef = collection(db, "Products",id)

        // setDoc sobre escribo todo el elemento
        // updateDoc sobreescribe lo necesario.
        await updateDoc(collRef, {
            description: "harina",
            price: 1500,
            status: true,
            stock: 20

        })
        console.log("Modificando")
    }

    const deleteProduct = async () => {
        const id = "RBIYIUMolX9kQE3uWdUe"
        const collRef = collection(db, "Products",id)
        await deleteDoc(collRef)
        console.log("Eliminado")
    }

    return (
        <>
        <label htmlFor=""></label>
        <input></input>

            <button onCLick={updateProduct}>Modifica Producto</button>
        </>

    )

}
