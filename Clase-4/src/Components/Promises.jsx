import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";

const URL = "https://rickandmortyapi.com/api/character?";

const Promises = () => {
  const [data, setData] = useState({}); // guarda la info(resultados e info)
  const [api, setApi] = useState(URL); // va a guardar la api, que no sirve para reaccionar con un efecto
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(api);
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [api]);

  if (loading) return <Loading />;

  return (
    <>
      {data?.info?.prev && (
        <button onClick={() => setApi(data.info.prev)}>Atras</button>
      )}
      {data?.info?.next && (
        <button onClick={() => setApi(data.info.next)}>Siguiente</button>
      )}
      <ul>
        {data.results &&
          data?.results.map((character) => {
            return <li key={character.id}>Nombre: {character.name}</li>;
          })}
      </ul>
    </>
  );
};

export default Promises;
