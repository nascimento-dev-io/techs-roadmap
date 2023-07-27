import React, { useEffect, useState } from "react";

const CustomHookExample = () => {
  const { data, error, loading } = useFetch(
    "https://api.github.com/users/nascimento-dev-io"
  );

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Erro ao buscar usuário</div>;
  }

  return <div> User: {data.name}</div>;
};

export default CustomHookExample;

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setError(false);

        const response = await fetch(url);
        const data = await response.json();

        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return {
    loading,
    error,
    data,
  };
};
