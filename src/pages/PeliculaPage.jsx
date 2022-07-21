import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const PeliculaPage = () => {
const { id_pelicula } = useParams();
const [peli, setPeli] = useState({});
 
    useEffect(() => {
      const obtenerPelicula = async () => {
        const resp = await getDoc(doc(db, "fir-app-4b550", id_pelicula));
        setPeli({
          id: resp.id,
          ...resp.data(),
        });
      };

      obtenerPelicula();
    }, [id_pelicula]);
    

  return (
    <>
      <header>
        <h1>Pelicula</h1>
      </header>
      <main>
        <article>
          <h2>{peli.id}</h2>
          <h3>{peli.nombre}</h3>
          <p>{peli.descripcion}</p>
          <p>{peli.precio}</p>
        </article>
      </main>
    </>
  );
};

export default PeliculaPage;
