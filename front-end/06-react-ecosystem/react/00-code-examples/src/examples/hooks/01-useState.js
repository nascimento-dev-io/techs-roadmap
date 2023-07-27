import React, { useState } from "react";

const UseStateExample = () => {
  const [state, setState] = useState(0);

  return (
    <>
      <p> Contador: {state}</p>
      <button onClick={() => setState(state + 1)}>Incrementar</button>{" "}
      <button onClick={() => setState(state - 1)}>Decrementar</button>
    </>
  );
};
export default UseStateExample;

// link para explicação:
