
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export const AddItem = () => {

    const addProduct = async () => {
        const collRef = collection(db, "Products")
        await addDoc(collRef, {
            description: "harina",
            price: 1500,
            status: true,
            stock: 20

        })
        console.log("Agregando")
    }

    return (
        <>
            <button onCLick={addProduct}>Agregar Producto</button>
        </>

    )

}
