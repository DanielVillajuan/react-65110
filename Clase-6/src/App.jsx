import { Route, Routes } from "react-router-dom";
import Counter from "./Components/Counter";
import ViewCounter from "./Components/ViewCounter";
import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/counter" element={<Counter />} />
          <Route path="/ViewCounter" element={<ViewCounter />} />
        </Route>

        <Route path="/login" element={<h1>Login!!!!</h1>} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
