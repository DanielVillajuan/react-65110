import TodoItem from "./Components/TodoItem";
import TodoList from "./Components/TodoList";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <main className="w-full p-8 flex flex-col justify-center items-center gap-y-4">
        <h1 className="text-gray-800 text-2xl">Todo app</h1>
        <TodoItem />
        <TodoList />
      </main>
    </>
  );
};

export default App;
