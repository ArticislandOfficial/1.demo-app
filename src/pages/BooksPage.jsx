import React, { useState, useEffect } from "react";

const BooksPage = () => {
  const [bookPost, setBookPost] = useState([]);

  const extraerBooks = async () => {
    const respuestaAPI = await fetch(`https://fakerapi.it/api/v1/books`);
    const info = await respuestaAPI.json();
    setBookPost(info);
  };

  useEffect(() => {
    extraerBooks();
    // console.log(bookPost.data[1]);
  }, []);

  return (
    <>
       <table className="table caption-top">
        <caption>List of Books</caption>
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Titulo</th>
            <th scope="col">Autor</th>
            <th scope="col">Descripcion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <th scope="row">2</th> */}
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            {/* <th scope="row">3</th> */}
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          {bookPost.map((post) => {
            return (
              <tr>
                <td>{post.data.title}</td>
                <td>{post.data.author}</td>
                <td>{post.data.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BooksPage;