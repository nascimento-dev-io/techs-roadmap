import React, { useState, useMemo } from "react";

let count = 0;

const UseMemoExample = () => {
  const [value, setValue] = useState(1000);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const valueMenoizado = useMemo(() => {
    setMessage(`Memo recalculado - ${(count = count + 1)}x`);
    return value * 1000000e10;
  }, [value]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      {/* Aqui o cálculo do value é refeito */}
      <div style={{ border: "1px solid white" }}>
        <h5>{message}</h5>
        <p>{valueMenoizado}</p>
        <button onClick={() => setValue((prevValue) => prevValue * 100)}>
          Calcular
        </button>
      </div>

      {/* Aqui o cálculo do value se mantém*/}

      <div style={{ border: "1px solid white" }}>
        <h5>{message}</h5>
        <p>{name}</p>
        <input value={name} onChange={handleChange} />
      </div>
    </>
  );
};

export default UseMemoExample;

// link para explicação:

