import { useEffect, useState } from "react";

import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export const useAxios = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get(`/1`);

        setData(response.data);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    getPosts();
  }, []);

  function handleCreatePost() {
    setLoading(true);
    setError(null);
    api
      .post("/", {
        title: "Titulo do Post",
        body: "Esse é um novo post e foi criado em um exemplo de uso do axios, não é incrível?",
      })
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => setError("error" + error));
    setLoading(false);
  }

  function handleUpdatePost() {
    setLoading(true);
    setError(null);
    api
      .put(`/1`, {
        title: "Novo Titulo do Post",
        body: "Esse é um novo post e foi atualizado em um exemplo de uso do axios, não é incrível?",
      })
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => setError("error" + error));
    setLoading(false);
  }

  function handleDeletePost() {
    setLoading(true);
    setError(null);
    api
      .delete(`/1`)
      .then(() => {
        alert("Post deleted!");
        setData(null);
      })
      .catch((error) => setError("error" + error));
    setLoading(false);
  }

  function handleError() {
    setLoading(true);
    setError(null);
    api
      .get(`/asdf`)
      .then(({ data }) => setData(data))
      .catch((err) => {
        setData(null);
        setError("error" + err);
      });
    setLoading(false);
  }

  return {
    data,
    error,
    loading,
    handleCreatePost,
    handleUpdatePost,
    handleDeletePost,
    handleError,
  };
};
