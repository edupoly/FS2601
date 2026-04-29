import { useEffect, useState } from "react";
import Products from "./Products";
function App() {
  console.log("App component");

  useEffect(() => {
    console.log("hello app");
  }, []);

  useEffect(() => {
    console.log("Hello All");
  });

  var [x, setX] = useState(1);

  function inc() {
    setX(x + 1);
  }

  return (
    <div className="border border-2 m-2 p-2 border-danger">
      <h1>Hello Main {x}</h1>
      <button
        onClick={() => {
          inc();
        }}
      >
        Increment
      </button>
      <Products></Products>
    </div>
  );
}

export default App;
