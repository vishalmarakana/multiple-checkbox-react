import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const fruitData = [
  {
    id: 0,
    name: "banana"
  },
  {
    id: 1,
    name: "apple"
  },
  {
    id: 2,
    name: "melon"
  },
  {
    id: 3,
    name: "orange"
  }
];

function App() {
  const [inputs, setInputs] = useState([]);

  console.log(inputs);
  return (
    <div className="App">
      <h1>MULTIPLE CHECKBOX</h1>
      <form>
        {fruitData.map(fruit => (
          <label key={fruit.id}>
            <input
              type="checkbox"
              name="fruit"
              value={fruit.id}
              onClick={() => {
                const index = inputs.findIndex(item => item === fruit.id);

                if (~index) {
                  setInputs([
                    ...inputs.slice(0, index),
                    ...inputs.slice(index + 1)
                  ]);
                } else {
                  setInputs([...inputs, fruit.id]);
                }
              }}
            />
            {fruit.id}
          </label>
        ))}
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
