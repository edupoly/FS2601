function Child(props) {
  console.log(props);
  var ch1 = "Manas";
  return (
    <div className="border border-2 border-success m-2 p-2">
      <h2>Child Component {props.x}</h2>
      <h3>{props.children}</h3>
      <h1>{ch1}</h1>
      <button
        onClick={() => {
          props.y(ch1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
export default Child;
