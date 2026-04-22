import React from "react";
import Child from "./Child";
function Parent() {
  var myname = "Praveen";
  var [chname, setChname] = React.useState("");
  function abc(v) {
    setChname(v);
  }
  return (
    <div className="border border-2 border-info m-2 p-2">
      <h2>Parent Component {myname}</h2>
      <h1>Child Name: {chname}</h1>

      <Child x={myname} y={abc}>
        Hello Ramesh
      </Child>
    </div>
  );
}
export default Parent;
