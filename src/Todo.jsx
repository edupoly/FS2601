import React from "react";

function Todo(props) {
  console.log("Todo comp rendered");
  return (
    <div>
      <li>
        {props.t}
        <button
          onClick={() => {
            props.deleteTodo(props.i);
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default React.memo(Todo);
