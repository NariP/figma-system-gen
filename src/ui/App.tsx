import { useState } from "react";

function App() {
  const [count, setCount] = useState(3);

  const onCreate = () => {
    parent.postMessage(
      { pluginMessage: { type: "create-rectangles", count } },
      "*",
    );
  };

  return (
    <div className="App">
      <h2>Rectangle Creator</h2>
      <p>
        Count:{" "}
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
      </p>
      <button onClick={onCreate}>Create</button>
    </div>
  );
}

export default App;
