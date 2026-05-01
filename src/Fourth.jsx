import React, { useContext } from "react";
import { MyContext } from "./MyContext";
function Fourth() {
  var p = useContext(MyContext);
  console.log(p);
  return (
    <div className="border border-info border-3 m-2 p-2">
      Fourth
      <h1>{p.count}</h1>
      <button
        onClick={() => {
          p.inc();
        }}
      >
        Inc
      </button>
    </div>
  );
}

export default Fourth;
