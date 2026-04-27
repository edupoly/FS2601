import { useState } from "react";
import Todolist from "./Todolist";

function App() {
  var [a, setA] = useState(4);
  return (
    <div className="border border-2 p-2 m-2 border-danger">
      <h1>Hello Main {a}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Click Me
      </button>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
