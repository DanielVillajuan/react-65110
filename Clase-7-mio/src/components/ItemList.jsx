import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebase"
import { useEffect } from "react";
import { useState } from "react";

export const ItemList = () => {
    const [Items, setItems] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, "Products");
        getDocs(collectionRef).then((snaps) => {
            const { docs } = snaps;
            const List = docs.map((doc) => ({ ...doc.data(), id: doc.data }));
            console.log(List)
        });
    }, [])




    return (
        <>
            <h1>ItemList</h1>
            {
            Items.map((item)=>(
                <div key={item.id}>
                    <p>Name:{item.name}</p>
                    <p>Price:{item.price}</p>
                    <p>Stock:{item.stock}</p>
                    <button></button>
                </div>
            ))    
            }

        </>
    )
}   