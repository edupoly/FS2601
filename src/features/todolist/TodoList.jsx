import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";

function TodoList() {
  var { todos } = useSelector((state) => state.todosR);
  var [ntd, setNtd] = useState("");
  var dispatch = useDispatch();

  console.log(todos);
  return (
    <div className="border border-2 m-2 p-2 border-success">
      <h2>TodoList</h2>
      <input
        type="text"
        onChange={(e) => {
          setNtd(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(ntd));
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((t) => {
          return <li>{t}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
