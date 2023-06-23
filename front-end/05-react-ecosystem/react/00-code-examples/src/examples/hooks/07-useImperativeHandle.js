import React, { forwardRef, useImperativeHandle, useRef } from "react";

const UseImperativeHandleExample = () => {
  const formRef = useRef(null);

  function handleSubmit() {
    formRef.current.submit();
    console.log(formRef.current);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form ref={formRef} />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

const Form = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        submit() {
          console.log(inputRef.current.value);
        },
      };
    },
    []
  );

  return (
    <form style={{ width: "280px", margin: "0 8px" }}>
      <input ref={inputRef} type="text" />
    </form>
  );
});

export default UseImperativeHandleExample;
