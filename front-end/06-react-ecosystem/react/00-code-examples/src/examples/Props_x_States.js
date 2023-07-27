import React, { useState } from "react";

//  Parent - Stateful Component
const Parent = () => {
  // State criado para manipular entrada do input
  const [text, setText] = useState("");

  const handleChange = (e) => {
    // State é mútável - altera ao digitar do usuário.
    setText(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" value={text} onChange={handleChange} />
      </form>
      {/* text é a Props passando o State */}
      <Child text={text} />
    </div>
  );
};

export default Parent;

// Child - Stateless Component

const Child = (props) => {
  // error: readOnly
  const newText = (props.text = "New Value");

  // O Componente filho re-renderiza em toda alteração de sua Prop
  return <div>{props.text}</div>;
};
