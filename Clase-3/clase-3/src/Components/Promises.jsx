import { useEffect } from "react";
import Profile from "./Profile";
import { useState } from "react";
import Loading from "./Loading";

const BBDD = [
  {
    nombre: "Dani",
    nota: 7,
    id: 1,
  },
  { nombre: "Bauti", nota: 10, id: 2 },
  { nombre: "Pedro", nota: 2, id: 3 },
];

const fetchData = (time) => {
  // si a un parametro le pongo un igual y valor, va a tomar dicho valor cuando el parametro sea undefined
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(BBDD);
    }, time);
  });
};

const Promises = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch('http://mibase.com.ar/api/alumnos').then
    setLoading(true);
    fetchData(3000).then((data) => {
      console.log(data);
      setAlumnos(data); // null
      setLoading(false); // apagar el loading
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <ul>
        {alumnos.map((alumno) => {
          return <Profile key={alumno.id} alumno={alumno} />;
        })}
      </ul>
    </>
  );
};

export default Promises;
