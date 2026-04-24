import React, { useState } from "react";
import Todo from "./Todo";

function Todolist() {
  var [todos, setTodos] = useState([
    "Play Cricket",
    "Join Gym",
    "Goto Goa",
    "Attend Workshop",
    "Marketing Team",
  ]);
  function deleteTodo(index) {
    // ***with temp array **** //
    // var temp = [...todos];
    // temp.splice(index, 1);
    // setTodos([...temp]);

    //using setter callback
    setTodos((ctodos) => {
      return ctodos.filter((t, i) => {
        if (i === index) {
          return false;
        } else {
          return true;
        }
      });
    });
  }
  return (
    <div className="border border-2 p-2 m-2 border-success">
      <h1>Todolist</h1>
      <ul className="p-0 list-unstyled">
        {todos.map((todo, i) => {
          return (
            <Todo deleteTodoItem={deleteTodo} i={i}>
              {todo}
            </Todo>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
