import React, { useState } from "react";
import Todo from "./Todo";

function Todolist() {
  var [todos, setTodos] = useState(["Play Cricket", "Join Gym", "Goto Goa"]);

  return (
    <div className="border border-2 p-2 m-2 border-success">
      <h1>Todolist</h1>
      <ul className="p-0 list-unstyled">
        {todos.map((todo) => {
          return <Todo>{todo}</Todo>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
