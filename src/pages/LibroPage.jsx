import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import {  doc, getDoc } from "firebase/firestore";

const LibroPage = () => {
const [libro, setLibro] = useState({});
const {idlibro} = useParams();
// useEffect(() => {
//     const obtenerLibro = async ()=>{
//      const coleccion = await getDoc(doc(db,'libros',idlibro));
//      setLibro({
//         id: coleccion.id,
//         ...coleccion.data().
//      });  
//     }
//     obtenerLibro()
// }
// }, [idlibro])
  useEffect(() => {
    const obtenerPelicula = async () => {
      const resp = await getDoc(doc(db, "libros", idlibro));
      setLibro({
        id: resp.id,
        ...resp.data(),
      });
    };

    obtenerPelicula();
  }, [idlibro]);


  return (
    <>
      <header>
        <h1>Pagina individual de libro</h1>
      </header>
      <main>
        <article>
          <h2>{libro.titulo}</h2>
          <h3>{libro.autor}</h3>
          <h6>{libro.id}</h6>
          <p>{libro.editorial}</p>
          <p>{libro.año}</p>
        </article>
      </main>
    </>
  );
};

export default LibroPage;
