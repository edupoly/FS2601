import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Counter from "./features/counter/Counter";
import Products from "./features/product/Products";
import TodoList from "./features/todolist/TodoList";

function App() {
  return (
    <div className="border border-2 m-2 p-2 border-danger">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
