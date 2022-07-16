import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  const extraerPosts = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();

    // console.log(data);
    setPosts(data);
  };

  const extrarLibros = async () => {
    const result = await fetch("https://fakerapi.it/api/v1/books");
    const resultado = await result.json();

    console.log(resultado.data);
  };

  useEffect(() => {
    extraerPosts();
    // const traerPosts = async () => {
    //   const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    //   const data = await resp.json();

    //   setPosts(data);
    // };

    // traerPosts();
  }, []);

  return (
    <>
      <header>
        <h1>Posts</h1>
      </header>
      <main>
        <article>
          <button onClick={extraerPosts}>Extraer posts</button>
          <button onClick={extrarLibros}>Extraer libros</button>
        </article>
        <article>
          <ul>
            {posts.map((post) => {
              return (
                <li key={post.id}>
                  <h2>{post.id}</h2>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <NavLink to={`/post/${post.id}`} className="btn btn-success">
                    Navegar al post
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </article>
      </main>
    </>
  );
};

export default PostsPage;
