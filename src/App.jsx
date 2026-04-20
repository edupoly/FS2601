import Counter from "./Counter";
import Interactions from "./Interactions";

function App() {
  return (
    <div className="border border-danger m-3 p-3">
      <h1>Hello Main</h1>
      <Counter a={10} b={5} c="red"></Counter>
      <Counter a={20} b={100} c="blue"></Counter>
      <Interactions></Interactions>
    </div>
  );
}

export default App;
