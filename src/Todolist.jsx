import React from "react";

function Todolist() {
  console.log("Todolist re rendered");
  //state
  var [todos, setTodos] = React.useState([
    "goto gym",
    "get almonds",
    "pay bills",
    "complete syllabus",
  ]);
  //action
  function addTodo() {
    var a = document.getElementById("d1").value;
    // todos.push(a);//wrong because UI will not render//state is immutable
    // setTodos([...todos, a]);
    setTodos((cv) => {
      return [...cv, a];
    });
  }
  function deleteTodo(index) {
    // var temp = [...todos];
    // temp.splice(index, 1);
    // setTodos([...temp]);
    setTodos((cv) => {
      return cv.filter((todo, i) => {
        if (i !== index) {
          return true;
        }
      });
    });
  }
  //ui
  return (
    <div className="border border-2 p-2 m-2 border-primary">
      <h1>Todolist</h1>
      <input type="text" id="d1" />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((t, i) => {
          return (
            <li>
              {t}
              <button
                onClick={() => {
                  deleteTodo(i);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default React.memo(Todolist);
// React.memo is HOC
