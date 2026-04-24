import React from "react";

function Todo(props) {
  return (
    <li className="shadow m-1 p-2 d-flex align-items-center justify-content-between">
      <b>
        {props.children} {props.i}
      </b>
      <div>
        <button className="btn btn-warning btn-sm mx-1 my-1">Done</button>
        <button
          className="btn btn-danger btn-sm mx-1 my-1"
          onClick={() => {
            props.deleteTodoItem(props.i);
          }}
        >
          Delete
        </button>
        <button className="btn btn-info btn-sm mx-1 my-1">Undo</button>
      </div>
    </li>
  );
}

export default Todo;
