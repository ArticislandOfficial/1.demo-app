import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import {  doc, getDoc } from "firebase/firestore";

const LibroPage = () => {
const [libro, setLibro] = useState({});
const {idlibro} = useParams();

useEffect(() => {
    const obtenerLibro = async ()=>{
     const coleccion = await getDoc(doc(db,'libros',idlibro));
     setLibro({
        id: coleccion.id,
        ...coleccion.data(),
     });  
    };
    obtenerLibro()

}, [idlibro]);

  // useEffect(() => {
  //   const obtenerLibro = async () => {
  //     const coleccion = await getDoc(doc(db, "libros", idlibro));
  //     setLibro({
  //       id: coleccion.id,
  //       ...coleccion.data(),
  //     });
  //   };

  //   obtenerLibro();
  // }, [idlibro]);


  return (
    <>
      <header>
        <h1>Pagina individual de libro</h1>
      </header>
      <main>
        <article>
          <h2>Titulo: {libro.titulo}</h2>
          <h3>Editorial: {libro.editorial}</h3>
          <h6>IDfirestore: {libro.id}</h6>
          <p>Autor: {libro.autor}</p>
          <p>
            Año de Publicaciòn: <b>{libro.año}</b>
          </p>
        </article>
      </main>
    </>
  );
};

export default LibroPage;
