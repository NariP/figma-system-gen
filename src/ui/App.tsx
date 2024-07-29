import { useEffect, useState } from "react";

interface Result {
  name: string;
  rgbaObj: RGB | RGBA;
  hex: string;
  id: string;
}

function App() {
  // const [count, setCount] = useState(3);
  const [result, setResult] = useState<Result[]>([]);

  const getLocalVariables = () => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "import-local-variables",
        },
      },
      "*",
    );
  };

  useEffect(() => {
    getLocalVariables();
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const { type, result } = event.data.pluginMessage as {
        type: string;
        result: Result[];
      };

      if (type === "local-variables-result") {
        setResult(result);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  // const onCreate = () => {
  //   parent.postMessage(
  //     { pluginMessage: { type: "create-rectangles", count } },
  //     "*",
  //   );
  // };

  return (
    <div className="App">
      <div>깃헙 로그인(todo)!</div>
      <div>tailwind-config 에 맞게 변경(todo)!</div>
      <div>표시, 붙여넣기 가능하게 하기(todo)!</div>
      <button type="button" onClick={getLocalVariables}>
        다시 가져오기
      </button>
      <ul>
        {result.map((val) => {
          return (
            <li key={val.id} style={{ padding: 2 }}>
              {val.name.replace("/", "-")}:{" "}
              <span
                style={{
                  background: val.hex,
                  borderRadius: 4,
                  padding: "1px 4px",
                  color: "white",
                }}
              >
                {val.hex}
              </span>
            </li>
          );
        })}
      </ul>
      <code style={{ backgroundColor: "lightgray" }}>1 + 1 = 2</code>
    </div>
  );
}

export default App;
