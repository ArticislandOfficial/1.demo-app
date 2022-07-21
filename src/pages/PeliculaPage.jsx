import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

const PeliculaPage = () => {
const { id_pelicula } = useParams();
const [peli, setPeli] = useState([]);
  const obtenerPeliculas = async () => {
      const resp = await getDocs(collection(db, "fir-app-4b550"));
      const peliculas = resp.docs.map((pelicula) => ({
        id: pelicula.id,
        ...pelicula
      }));
      console.log(peliculas);
      setPeli(peliculas);
    }
    useEffect(() => {
      obtenerPeliculas();
    }, [id_pelicula]);
    

  return (
    <>
      <header>
        <h1>Pelicula</h1>
      </header>
      <main>
        <article>
          <ul>
            <li>{peli.nombre}</li>
            <li></li>
            <li></li>
          </ul>
        </article>
      </main>
    </>
  );
};

export default PeliculaPage;
