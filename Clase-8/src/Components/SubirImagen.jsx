import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import firebaseConfig from "../config/firebase";
import { useState } from "react";

const SubirImagen = () => {
  const [url, setUrl] = useState("");
  const handleChange = async (e) => {
    const refStorage = ref(firebaseConfig.storage, "imagen");
    const fileSnap = await uploadBytes(refStorage, e.target.files[0]);
    const fileUrl = await getDownloadURL(fileSnap.ref);
    // { desc: '', price: '', category: '', disccount: '', fileSrc: '' }
    setUrl(fileUrl);
  };

  const handleClick = () => {
    console.log(url);
  }
  return (
    <div className="flex flex-col gap-y-4">
      <span>Subir imagen</span>
      <input type="file" onChange={handleChange} />
      <button onClick={handleClick}>Obtener Url por consola</button>
    </div>
  );
};

export default SubirImagen;
