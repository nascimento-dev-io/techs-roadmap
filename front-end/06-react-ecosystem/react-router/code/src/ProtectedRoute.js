import React from "react";

export const ProtectedRoute = ({ children }) => {
  const logged = false;

  return logged ? children : <p>Você não esta logado</p>;
};
