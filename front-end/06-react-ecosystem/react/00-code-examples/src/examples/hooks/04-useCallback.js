import React, { useCallback, useState } from "react";

const UseCallbackExample = () => {
  const [state, setState] = useState(0);

  console.log("RE-RENDER PARENT");

  const handleClick = useCallback(() => {
    setState((prevState) => prevState + 1);
  }, []);

  return (
    <div>
      <div>{state}</div>
      <Child onClick={handleClick} />
    </div>
  );
};

export default UseCallbackExample;

// Memo
const Child = React.memo(({ onClick }) => {
  console.log("RE-RENDER CHILD");

  return <button onClick={onClick}>Incrementar</button>;
});

// link para explicação:

