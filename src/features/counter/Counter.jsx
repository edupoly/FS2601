import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

function Counter() {
  var { count } = useSelector((state) => state.counterR);
  var dispatch = useDispatch();
  return (
    <div className="border border-2 m-2 p-2 border-info">
      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
