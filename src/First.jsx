import React from "react";
import Second from "./Second";

function First(props) {
  return (
    <div className="border border-danger border-3 m-2 p-2">
      First
      <Second></Second>
    </div>
  );
}

export default First;
