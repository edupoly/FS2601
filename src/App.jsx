import Counter from "./features/counter/Counter";
import Products from "./features/product/Products";
import TodoList from "./features/todolist/TodoList";

function App() {
  return (
    <div className="border border-2 m-2 p-2 border-danger">
      <h1>Hello Main</h1>
      <Counter></Counter>
      <TodoList></TodoList>
      <Products></Products>
    </div>
  );
}

export default App;
