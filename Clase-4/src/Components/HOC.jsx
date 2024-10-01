import { useEffect, useState } from "react";

const HOC = (Component, url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return <Component data={data} />;
};

export default HOC;
