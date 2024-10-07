const TodoItem = () => {
  return (
    <div>
      <article className="p-4 flex flex-col gap-y-2 border-2 border-gray-400  rounded-xl">
        <label htmlFor="cheese">Descripcion</label>
        <input
          className="border-gray-400 border-2 rounded-lg py-2 px-4"
          type="input"
          name="cheese"
          id="cheese"
        />

        <label htmlFor="categorias">Categoria</label>
        <select
          className="border-gray-400 border-2 rounded-lg py-2 px-4"
          name="categorias"
          id="categorias"
        >
          <option defaultChecked>-</option>
          <option value="casa">casa</option>
          <option value="trabajo">trabajo</option>
          <option value="ocio">ocio</option>
        </select>
        <button className="border-2 border-cyan-500 py-1 px-2 rounded-lg">
          Crear
        </button>
      </article>
    </div>
  );
};

export default TodoItem;
