import React, { useState, useEffect } from "react";

const PersonPage = () => {
  const [person, setPerson] = useState([]);

  const extaerPersonas = async () => {
    const respuetaAPI = await fetch(`https://fakerapi.it/api/v1/persons`);
    const info = await respuetaAPI.json();

    setPerson(info.data)
  };
useEffect(() => {
  extaerPersonas();
}, [])



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
          {person.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id} </td>
                <td>{post.firstname}</td>
                <td>{post.lastname}</td>
                <td>{post.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default PersonPage