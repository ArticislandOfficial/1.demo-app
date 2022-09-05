import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { idPost } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const extraerPost = async () => {
      const resultado = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${idPost}`
      );
      const data = await resultado.json();
// Esta linea hace que se guarde en el useState
      setPost(data);
    };

    extraerPost();
    // cuando se tienen dependecias en useEffect la funcion debe ir adentro 
  }, [idPost]);

  return (
    <>
      <header>
        <title>Pagina del post individual</title>
      </header>
      <main>
        <article>
          <h2>{post.id}</h2>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      </main>
    </>
  );
};

export default PostPage;
