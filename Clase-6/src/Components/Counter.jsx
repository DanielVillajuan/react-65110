import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

const Counter = () => {
  const { increment } = useContext(CounterContext);

  return (
    <div>
      <button className="p-2 border-2 rounded-lg" onClick={increment}>
        Sumar 1
      </button>
    </div>
  );
};

export default Counter;
