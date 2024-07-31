import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log(counter);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log(counter);
    }
  };
  return (
    <>
      <h1>Hariom Chouhan</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <button style={{ marginLeft: "5px" }} onClick={removeValue}>
        Remove Value {counter}
      </button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
