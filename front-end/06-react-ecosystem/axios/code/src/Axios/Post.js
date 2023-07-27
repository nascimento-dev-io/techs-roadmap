import React, { useEffect, useState } from "react";

import axios from "axios";

import "./Post.css";
const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export function Post() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get(`${baseUrl}/1`);

        setPosts(response.data);
      } catch (error) {
        setError(error);
      }
    }

    getPosts();
  }, []);

  function handleCreatePost() {
    axios
      .post(baseUrl, {
        title: "Titulo do Post",
        body: "Esse é um novo post e foi criado em um exemplo de uso do axios, não é incrível?",
      })
      .then(({ data }) => setPosts(data))
      .catch((error) => setError("error" + error));
  }

  function handleUpdatePost() {
    axios
      .put(`${baseUrl}/1`, {
        title: "Novo Titulo do Post",
        body: "Esse é um novo post e foi atualizado em um exemplo de uso do axios, não é incrível?",
      })
      .then(({ data }) => setPosts(data))
      .catch((error) => setError("error" + error));
  }

  function handleDeletePost() {
    axios
      .delete(`${baseUrl}/1`)
      .then(() => {
        alert("Post deleted!");
        setPosts(null);
      })
      .catch((error) => setError("error" + error));
  }

  function handleError() {
    axios
      .get(`${baseUrl}/asdf`)
      .then(({ data }) => setPosts(data))
      .catch((err) => {
        setPosts(null);
        setError("error" + err);
      });
  }

  return (
    <div className="container">
      <h1>Postagens</h1>
      <hr />
      {posts ? (
        <>
          <h2 className="post-title">{posts.title}</h2>
          <p className="post-body">{posts.body}</p>

          <div className="container-crud-btns">
            <button onClick={handleCreatePost} className="post-btn">
              Create post
            </button>

            <button onClick={handleUpdatePost} className="post-btn">
              Update post
            </button>

            <button onClick={handleDeletePost} className="post-btn">
              Delete post
            </button>

            <button onClick={handleError} className="post-btn">
              Error post
            </button>
          </div>
        </>
      ) : (
        <h2 className="post-title">Nenhum Post Disponível</h2>
      )}
      {error && <p>Ocorreu na requisição: {error}</p>}
    </div>
  );
}
