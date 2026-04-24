import React, { useState } from "react";
import Todo from "./Todo";

function Todolist() {
  var [filterType, setFilterType] = React.useState("all");

  var [todos, setTodos] = useState([
    {
      title: "Play Cricket",
      status: true,
    },
    {
      title: "Join Gym",
      status: true,
    },
    {
      title: "Goto Goa",
      status: false,
    },
    {
      title: "Attend Workshop",
      status: true,
    },
    {
      title: "Marketing Team",
      status: false,
    },
    {
      title: "AI Team Meeting",
      status: false,
    },
    {
      title: "Consultant Call",
      status: true,
    },
  ]);
  var [filteredTodos, setFilteredTodos] = React.useState([...todos]);
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
  // function doneTask(index) {
  //   var temp = [...todos];
  //   temp[index].status = true;
  //   setTodos([...temp]);
  // }
  // function undoTask(index) {
  //   var temp = [...todos];
  //   temp[index].status = false;
  //   setTodos([...temp]);
  // }
  function toggleTask(index) {
    var temp = [...todos];
    temp[index].status = !temp[index].status;
    setTodos([...temp]);
  }
  function handleFilter(f) {
    setFilterType(f);
    if (f === "all") {
      setFilteredTodos([...todos]);
    }
    if (f === "complete") {
      setFilteredTodos(() => {
        return todos.filter((t) => t.status);
      });
    }
    if (f === "incomplete") {
      setFilteredTodos(() => {
        return todos.filter((t) => !t.status);
      });
    }
  }
  return (
    <div className="border border-2 p-2 m-2 border-success">
      <h1>Todolist</h1>
      <div className="d-flex">
        <input
          type="radio"
          name="fType"
          value="all"
          className="ms-3"
          onChange={() => {
            handleFilter("all");
          }}
          checked={filterType === "all"}
        />
        :All
        <input
          type="radio"
          name="fType"
          value="completed"
          className="ms-3"
          onChange={() => {
            handleFilter("complete");
          }}
        />
        :Completed
        <input
          type="radio"
          name="fType"
          value="completed"
          className="ms-3"
          onChange={() => {
            handleFilter("incomplete");
          }}
        />
        :Incomplete
      </div>
      <h1>Slected Filter:{filterType}</h1>
      <ul className="p-0 list-unstyled">
        {filteredTodos.map((todo, i) => {
          return (
            <Todo
              todo={todo}
              // doneTask={doneTask}
              // undoTask={undoTask}
              toggleTask={toggleTask}
              deleteTodoItem={deleteTodo}
              i={i}
            ></Todo>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
