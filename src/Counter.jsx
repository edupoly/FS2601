import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

function Counter(props) {
  console.log(props);
  var p = useLocation();
  console.log(p);
  return (
    <div className="border border-info border-2 m-2 p-2">
      <h1>Counter:{props.counterReducer.count}</h1>
      <br />
      <button
        onClick={() => {
          props.dispatch({ type: "INC" });
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default connect((store) => {
  return store;
})(Counter);
