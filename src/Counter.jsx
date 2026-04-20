import React from "react";
function Counter(props) {
  //state
  //   var count = 0;
  var [count, setCount] = React.useState(props.a);

  //actions
  function inc() {
    // count = count + 1;
    setCount(count + props.b);
  }
  function dec() {
    setCount(count - props.b);
  }
  return (
    // ui
    <div
      className="border border-success m-3 p-3"
      style={{ backgroundColor: props.c }}
    >
      <h1>Counter: {count} </h1>
      <button
        onClick={() => {
          inc();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dec();
        }}
      >
        Decrement
      </button>
    </div>
  );
}
export default Counter;
