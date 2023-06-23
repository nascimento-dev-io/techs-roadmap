import React, { useState, useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef(null);

  const [message, setMessage] = useState("");

  function handleClick() {
    setMessage(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <div>
      <p>{message}</p>
      <input ref={inputRef} /> <br />
      <button onClick={handleClick}>Mostra Valor</button>
    </div>
  );
};

export default UseRefExample;

// link para explicação:
