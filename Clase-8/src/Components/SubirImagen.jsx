import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import firebaseConfig from "../config/firebase";

const SubirImagen = () => {
  const handleChange = async (e) => {
    const refStorage = ref(firebaseConfig.storage, "imagen");
    const fileSnap = await uploadBytes(refStorage, e.target.files[0]);
    const fileUrl = await getDownloadURL(fileSnap.ref);
    console.log(fileUrl);
    console.log("Hola");
  };

  return (
    <div className="flex flex-col gap-y-4">
      <span>Subir imagen</span>
      <input type="file" onChange={handleChange} />
    </div>
  );
};

export default SubirImagen;
