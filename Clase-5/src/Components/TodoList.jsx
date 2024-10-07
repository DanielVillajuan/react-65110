const data = [
  {
    descripcion: "Comprar aceite",
    categoria: "casa",
    estado: "pendiente",
  },
  {
    descripcion: "Mandar correo a compañero",
    categoria: "trabajo",
    estado: "pendiente",
  },
  {
    descripcion: "Ver Joker",
    categoria: "ocio",
    estado: "pendiente",
  },
];

const TodoList = () => {
  return (
    <>
      <h1>Todo List</h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((todo, i) => {
          return (
            <article
              key={i}
              className="p-4 flex flex-col gap-y-2 border-2 border-gray-400  rounded-xl"
            >
              <label htmlFor="cheese">Descripcion</label>
              <input
                className="border-gray-400 border-2 rounded-lg py-2 px-4"
                type="input"
                name="cheese"
                id="cheese"
                value={todo.descripcion}
              />

              <label htmlFor="categorias">Categoria</label>
              <select
                className="border-gray-400 border-2 rounded-lg py-2 px-4"
                name="categorias"
                id="categorias"
                value={todo.categoria}
              >
                <option defaultChecked>-</option>
                <option value="casa">casa</option>
                <option value="trabajo">trabajo</option>
                <option value="ocio">ocio</option>
              </select>
              <button className="border-2 border-green-500 py-1 px-2 rounded-lg text-gray-600">
                Completar
              </button>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
