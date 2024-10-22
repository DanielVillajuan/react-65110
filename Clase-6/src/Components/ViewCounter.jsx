import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

// si el counter es >10 muestro, le diste mas de 10 click animal!
const ViewCounter = () => {
  const { counter } = useContext(CounterContext);
  return (
    <>
      <div>El contador es: {counter}</div>
      {counter > 10 ? <span>Le diste mas de 10 click animal!</span> : null}
    </>
  );
};

export default ViewCounter;
