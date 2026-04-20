import React from "react";

function Interactions() {
  var [likes, setLikes] = React.useState(0);
  var [saves, setSaves] = React.useState(0);
  function like() {
    setLikes(likes + 1);
  }
  function save() {
    setSaves(saves + 1);
  }
  return (
    <div className="border border-info border-5 m-3 p-3">
      <h1>Interactions</h1>
      <div className="d-flex flex-column align-items-center pb-3">
        <i
          className="bi bi-heart fs-1"
          onClick={() => {
            like();
          }}
        ></i>
        {likes}
      </div>
      <div className="d-flex flex-column align-items-center">
        <i
          class="bi bi-bookmark fs-1"
          onClick={() => {
            save();
          }}
        ></i>
        {saves}
      </div>
    </div>
  );
}

export default Interactions;
