import React from "react";

// css puro
// import "./styles-pure.css";

// css module
import styles from "./styles.module.css";

export const StylesExample = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        width: "100vw",
        height: "100vh",

        margin: "0 auto",
        fontFamily: "'Roboto', sans-serif",

        backgroundColor: "#2F3D40",
        color: "#f5f5f5",

        padding: "16px",
      }}
    >
      <h2
        style={{
          textAlign: "left",
          fontSize: "1.2rem",
        }}
      >
        Article title
      </h2>
      <p
        style={{
          backgroundColor: " #29383b",
          padding: "12px",

          lineHeight: 1.5,
          borderRadius: "6px",

          wordWrap: "wrap",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio
        voluptates omnis, molestiae ad doloremque dicta eveniet natus numquam
        impedit id, nam deleniti sint asperiores iure quam nobis eos a. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Sit odio voluptates
        omnis, molestiae ad doloremque dicta eveniet natus numquam impedit id,
        nam deleniti sint asperiores iure quam nobis eos a. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Sit odio voluptates omnis,
      </p>
    </div>
  );
};
