import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";

const API = "https://rickandmortyapi.com/api/character";

const Promises = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <ul>
        {characters.map((character) => {
          return <li key={character.id}>Nombre: {character.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Promises;
