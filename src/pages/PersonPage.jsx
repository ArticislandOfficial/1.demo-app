import React, { useState, useEffect } from "react";

const PersonPage = () => {
  const [person, setPerson] = useState([]);
// const [direccion, setDireccion] = useState([])

  const extaerPersonas = async () => {
    const respuetaAPI = await fetch(`https://fakerapi.it/api/v1/persons`);
    const info = await respuetaAPI.json();

    setPerson(info.data)
    // setDireccion(info.data.address)
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
            <th scope="col">name</th>
            <th scope="col">lastname</th>
            <th scope="col">addres</th>
          </tr>
        </thead>
        <tbody>
          {person.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id} </td>
                <td>{post.firstname}</td>
                <td>{post.lastname}</td>
                <td>
                  <b></b>
                  <ul className="formato">
                    <li>
                      <b>Calle:</b> {post.address.street}
                    </li>
                    <li>
                      <b>Numero de casa:</b> {post.address.buildingNumber}
                    </li>
                    <li>
                      <b>Ciudad:</b> {post.address.city}
                    </li>
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default PersonPage