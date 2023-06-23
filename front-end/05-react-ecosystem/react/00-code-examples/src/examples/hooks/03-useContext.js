import React, { useState, useContext } from "react";

import { myContext } from "./03.1-Context-Provider";

const UseContextExample = () => {
  // useContext
  const { toggleTheme, theme } = useContext(myContext);
  console.log("Parent");

  return (
    <div style={theme}>
      <UserInfo />
      <hr />
      <Counter />
      <hr />
      <button style={{ padding: "8px 12px" }} onClick={toggleTheme}>
        {" "}
        Toggle Theme
      </button>
    </div>
  );
};
export default UseContextExample;

//  --------------------------------------------------------

// Componente Counter
const Counter = () => {
  const [counter, setCounter] = useState(0);
  console.log("Counter");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>{counter}</p>
      <div>
        <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
          +
        </button>
        <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
          -
        </button>
      </div>
    </div>
  );
};

//  --------------------------------------------------------

// Componente UserInfo
const UserInfo = () => {
  const { user, theme } = useContext(myContext);

  return (
    <>
      <strong style={theme}>User: {user.name || "Desconhecido"}</strong>
    </>
  );
};

// link para explicação:
