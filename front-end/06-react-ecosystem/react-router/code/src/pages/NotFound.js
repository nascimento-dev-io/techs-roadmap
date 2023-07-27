import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  console.log(navigate);

  // tempo para página redirecionar
  useEffect(() => {
    const id = setTimeout(() => navigate(-1), 3000);
    return () => clearTimeout(id);
  }, [navigate]);

  return <h1>Page Not Found</h1>;
};

export default NotFound;
