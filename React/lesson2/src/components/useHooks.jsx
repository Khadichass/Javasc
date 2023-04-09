// import React, { useState } from "react";

// const UseHooks = () => {
//   const [count, setCount] = useState(0);
//   const [dark, setDark] = useState(false);
//   const [light, setLight] = useState(true);

//   return (
//     <div
//       className="counter"
//       style={{ backgroundColor: light ? "white" : "black" }}
//     >
//       <div className="text">
//         <h1>Count:{count}</h1>
//       </div>
//       <div className="btn">
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//         <button onClick={() => setCount(0)}>Reset</button>
//         <button onClick={() => setCount(count - 1)}>Deccrement</button>
//       </div>

//       <div className="change">
//         <button>Dark</button>
//       </div>
//     </div>
//   );
// };

// export default UseHooks;

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
        <h1>Count:{count}</h1>
      </div>
      <div className="btn">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>Deccrement</button>
      </div>

      <div className="change">
        <button onClick={toggleTheme}>{dark ? "Light" : "Dark"}</button>
      </div>
    </div>
  );
};

export default UseHooks;
