import { useNavigate } from "react-router-dom";

const TodoList = (props) => {
  const navigate = useNavigate(); // retorna una funcion para navegar

  return (
    <>
      <h1>Todo List</h1>
      <div className="grid grid-cols-4 gap-4">
        {props.todoList &&
          props.todoList.map((todo, i) => {
            return <TodoItem />;
          })}
      </div>
    </>
  );
};

export default TodoList;
