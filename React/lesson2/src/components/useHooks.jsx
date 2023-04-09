import React, { useState } from "react";

const UseHooks = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const [light, setLight] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    setLight(!light);
  };

  return (
    <div
      className="counter"
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <div className="text">
        <h1
          style={{
            color: dark ? "white" : "black",
          }}
        >
          Count:{count}
        </h1>
      </div>
      <div className="btn">
        <button
          style={{
            backgroundColor: dark ? "red" : "black",
            color: dark ? "black" : "white",
            border: dark ? "red" : "black",
          }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          style={{
            backgroundColor: dark ? "red" : "black",
            color: dark ? "black" : "white",
            border: dark ? "red" : "black",
          }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          style={{
            backgroundColor: dark ? "red" : "black",
            color: dark ? "black" : "white",
            border: dark ? "red" : "black",
          }}
          onClick={() => setCount(count - 1)}
        >
          Deccrement
        </button>
      </div>

      <div className="change">
        <button
          style={{
            backgroundColor: dark ? "white" : "black",
            color: dark ? "black" : "white",
          }}
          onClick={toggleTheme}
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
};

export default UseHooks;
