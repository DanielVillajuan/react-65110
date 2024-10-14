import { useState } from "react";
import TodoItem from "./Components/TodoItem";
import TodoList from "./Components/TodoList";
import { Link, Route, Routes } from "react-router-dom";
const data = [
  {
    id: 1,
    descripcion: "Comprar aceite",
    categoria: "casa",
    estado: "pendiente",
  },
  {
    id: 2,
    descripcion: "Mandar correo a compañero",
    categoria: "trabajo",
    estado: "pendiente",
  },
  {
    id: 3,
    descripcion: "Ver Joker",
    categoria: "ocio",
    estado: "pendiente",
  },
];

const Layout = ({ children }) => {
  return (
    <div>
      <Link to={"/todo/"}>Ir a todo</Link>
      <Link to={"/todo/primero"}>Ir a primer todo</Link>
      <Link to={"/"}>Volver a home</Link>
      <h1>Header</h1>
      {children}
      <h2>Footer</h2>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1 className="text-gray-800 text-2xl">Home!</h1>
    </div>
  );
};

const App = () => {
  const [todoList, setTodoList] = useState(data);

  // return (
  //   <>
  //     {/* <Header /> */}
  //     <main className="w-full p-8 flex flex-col justify-center items-center gap-y-4">
  //       <h1 className="text-gray-800 text-2xl">Todo app</h1>
  //       <TodoItem setTodoList={setTodoList} />
  //       <TodoList todoList={todoList} />
  //     </main>
  //   </>
  // );
  // Routes  -> defino el conjunto de rutas
  // Route -> defino una ruta
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<TodoList todoList={todoList} />} />
          <Route
            path="/categories/:categories"
            element={<TodoList todoList={todoList} />}
          />
          <Route
            path="/products/:id"
            element={<TodoList todoList={todoList} />}
          />
          <Route path="/todo/:id/" element={<TodoItem />} />
          <Route path="*" element={<h1>Not found</h1>} />
          {/* <Route path="/nosotros" element={<Nosotros />} /> */}
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
