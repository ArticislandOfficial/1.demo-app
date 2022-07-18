import React, { useState, useEffect } from "react";

const BooksPage = () => {
  const [bookPost, setBookPost] = useState([]);

  const extraerBooks = async () => {
    const respuestaAPI = await fetch(`https://fakerapi.it/api/v1/books`);
    const info = await respuestaAPI.json();

    setBookPost(info.data);
  };

  useEffect(() => {
    extraerBooks();
  }, []);

  return (
    <>
       <table className="table caption-top">
        <caption>Lista de libros</caption>
        <thead>
          <tr>
            <th scope="col">ID array</th>
            <th scope="col">Titulo</th>
            <th scope="col">Autor</th>
            <th scope="col">Descripcion</th>
          </tr>
        </thead>
        <tbody>          
          {bookPost.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id} </td>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>{post.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BooksPage;