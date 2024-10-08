import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// useParams
const TodoItem = (props) => {
  const params = useParams();
  const [todo, setTodo] = useState({
    descripcion: "",
    categorias: "",
    estado: "pendiente",
  });
  console.log(params);
  useEffect(() => {
    // fech a la base de datos y le paso el id
  }, [params.id]);
  const handleChange = (event) => {
    const { value, name } = event.target;

    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleClick = () => {
    props.setTodoList((todoList) => {
      return [...todoList, todo];
    });
    setTodo({
      descripcion: "",
      categorias: "",
      estado: "pendiente",
    });
  };

  return (
    <div>
      <article className="p-4 flex flex-col gap-y-2 border-2 border-gray-400  rounded-xl">
        <label htmlFor="descripcion">Descripcion</label>
        <input
          onChange={handleChange}
          className="border-gray-400 border-2 rounded-lg py-2 px-4"
          type="input"
          name="descripcion"
          id="descripcion"
          value={todo.descripcion}
        />

        <label htmlFor="categorias">Categoria</label>
        <select
          onChange={handleChange}
          className="border-gray-400 border-2 rounded-lg py-2 px-4"
          name="categorias"
          id="categorias"
          value={todo.categorias}
        >
          <option value="casa">casa</option>
          <option value="trabajo">trabajo</option>
          <option value="ocio">ocio</option>
        </select>
        <button
          onClick={() => {
            handleClick();
          }}
          className="border-2 border-cyan-500 py-1 px-2 rounded-lg"
        >
          Crear
        </button>
      </article>
    </div>
  );
};

export default TodoItem;
