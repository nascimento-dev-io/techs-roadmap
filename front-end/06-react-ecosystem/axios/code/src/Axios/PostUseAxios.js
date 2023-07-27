import React from "react";

import "./Post.css";
import { useAxios } from "./useAxios";

export function PostUseAxios() {
  const {
    data,
    error,
    loading,
    handleCreatePost,
    handleUpdatePost,
    handleDeletePost,
    handleError,
  } = useAxios();

  if (loading) {
    return (
      <div className="container">
        <h1>Postagens</h1>

        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Postagens</h1>
      <hr />
      {data ? (
        <>
          <h2 className="post-title">{data.title}</h2>
          <p className="post-body">{data.body}</p>

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
