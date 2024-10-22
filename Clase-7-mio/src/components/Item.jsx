import { useEffect,useState } from "react";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

export const Item = () => {
    const [item, setItem] = useState(null)
    const id = "RBIYIUMolX9kQE3uWdUe";
    useEffect(() => {
        const docRef = doc(db, "Productos", id);
        getDoc(docRef).then((snap) => {
            console.log(snap.data());
            setItem(snap.data())
        });
    }, [])

    return (
        <>
            <h2>Item</h2>
            <p>Nombre: {Item.name}</p>
            <p>Price: {Item.price}</p>
        </>
    )

}