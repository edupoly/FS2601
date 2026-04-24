import React from "react";

function Todo(props) {
  return (
    <li className="shadow m-1 p-2 d-flex align-items-center justify-content-between">
      <b className={props.todo.status ? "text-decoration-line-through" : ""}>
        {props.todo.title} {props.i}
      </b>
      <div>
        {props.todo.status && (
          <button
            className="btn btn-info btn-sm mx-1 my-1"
            onClick={() => {
              props.toggleTask(props.i);
            }}
          >
            Undo
          </button>
        )}
        {!props.todo.status && (
          <button
            className="btn btn-warning btn-sm mx-1 my-1"
            onClick={() => {
              props.toggleTask(props.i);
            }}
          >
            Done
          </button>
        )}

        <button
          className="btn btn-danger btn-sm mx-1 my-1"
          onClick={() => {
            props.deleteTodoItem(props.i);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Todo;
