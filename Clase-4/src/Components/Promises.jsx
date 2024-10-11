import { useState, useEffect } from "react";
import Loading from "./Loading";

const API = "https://rickandmortyapi.com/api/character";

const Promises = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState(null); // Para almacenar la URL de la siguiente página
  const [prev, setPrev] = useState(null); // Para almacenar la URL de la página anterior
  const [url, setUrl] = useState(API); // URL dinámica 

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setNext(data.info.next); // Guardar la URL de la siguiente página
        setPrev(data.info.prev); // Guardar la URL de la página anterior
        setLoading(false);
      });
  }, [url]); // El efecto se ejecutará cuando cambie la URL

  if (loading) return <Loading />;

  // Funciones para manejar los botones de navegación
  const handleNext = () => {
    if (next) {
      setUrl(next); // Cambiar a la URL de la siguiente página
    }
  };

  const handlePrev = () => {
    if (prev) {
      setUrl(prev); // Cambiar a la URL de la página anterior
    }
  };

  return (
    <>
      <ul>
        {characters.map((character) => {
          return <li key={character.id}>Nombre: {character.name}</li>;
        })}
      </ul>

      {/* Botones de navegación */}
      <div>
        <button onClick={handlePrev} disabled={!prev}>
          Atrás
        </button>
        <button onClick={handleNext} disabled={!next}>
          Adelante
        </button>
      </div>
    </>
  );
};

export default Promises;

