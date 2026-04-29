import React, { useCallback, useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
function Todolist() {
  var [filterType, setFilterType] = useState("all");
  var [newTodo, setNewTodo] = useState("");
  var [todos, setTodos] = useState([
    {
      title: "Play Cricket",
      status: true,
      id: uuidv4(),
    },
    {
      title: "Join Gym",
      status: true,
      id: uuidv4(),
    },
    {
      title: "Goto Goa",
      status: false,
      id: uuidv4(),
    },
    {
      title: "Attend Workshop",
      status: true,
      id: uuidv4(),
    },
    {
      title: "Marketing Team",
      status: false,
      id: uuidv4(),
    },
    {
      title: "AI Team Meeting",
      status: false,
      id: uuidv4(),
    },
    {
      title: "Consultant Call",
      status: true,
      id: uuidv4(),
    },
  ]);
  var [filteredTodos, setFilteredTodos] = React.useState([...todos]);

  var deleteTodo = useCallback(function (index) {
    setTodos((ctodos) => {
      return ctodos.filter((t) => {
        if (t.id === index) {
          return false;
        } else {
          return true;
        }
      });
    });
  }, []);

  var toggleTask = useCallback(function (index) {
    var temp = [...todos];
    temp[index].status = !temp[index].status;
    setTodos([...temp]);
  }, []);

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
      <input
        type="text"
        onChange={(ev) => {
          setNewTodo(ev.target.value);
        }}
      />
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
        {filteredTodos.map((todo) => {
          return (
            <Todo
              todo={todo}
              // doneTask={doneTask}
              // undoTask={undoTask}
              toggleTask={toggleTask}
              deleteTodoItem={deleteTodo}
              i={todo.id}
              key={todo.id}
            ></Todo>
          );
        })}
      </ul>
    </div>
  );
}

export default React.memo(Todolist);
