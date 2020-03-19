import React from "react";
import PropTypes from "prop-types";

function Pencil({ name }) {
  return (
    <div>
      <h1> jimin {name} </h1>
    </div>
  );
}

const jrray = ["a", "b", "c", "d", "e"];

function App() {
  return (
    <div>
      {jrray.map(d => (
        <Pencil name={d} />
      ))}
    </div>
  );
}

export default App;
