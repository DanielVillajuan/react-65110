import { createContext, useEffect, useState } from "react";

export const CounterContext = createContext(null);

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const value = {
    counter,
    setCounter,
    increment,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}; // HOC va a proveer a todo lo que sea children

export default CounterProvider;
