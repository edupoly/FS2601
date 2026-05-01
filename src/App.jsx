import First from "./First";
import { MyContext } from "./MyContext";

function App() {
  var x = {
    count: 1,
    inc: function () {
      this.count++;
      console.log(this.count);
    },
  };
  return (
    <MyContext.Provider value={x}>
      <div className="border border-2 m-2 p-2">
        <h1>Hello Main {x.count}</h1>
        <button
          onClick={() => {
            x.inc();
          }}
        >
          Increment
        </button>
        <First></First>
      </div>
    </MyContext.Provider>
  );
}

export default App;
