import React, { useEffect, useState } from "react";

let count = 0;

const UseEffectExample = () => {
  const [firstRender, setFirstRender] = useState("");
  const [effect, setEffect] = useState("");

  const handleScroll = () => {
    count += 1;
    setEffect(`Effect ${count}`);
  };

  // useEffect
  useEffect(() => {
    // Effect - Mount
    setFirstRender("Renderizou");
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      // "Effect - Unmount"
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <h1>{firstRender}</h1>
      <h2>{effect}</h2>
    </>
  );
};
export default UseEffectExample;

// link para explicação:
