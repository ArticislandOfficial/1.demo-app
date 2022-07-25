import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";


const incioFormulario = {
  autor: "",
  titulo: "",
  editorial: "",
  año: "",
};

const LibrosPage = () => {
  const [form, setForm] = useState(incioFormulario);
  const [libro, setLibro] = useState([]);
  useEffect(() => {
    obtenerLibros();
  }, []);
  //Crea libro en firibase "C"
  const crearLibro = async () => {
    const coleccion = collection(db, "libros");
    await addDoc(coleccion, form);
    await obtenerLibros();
    console.log(form);
  };
  // Lee los libros de firebase "R"
  const obtenerLibros = async () => {
    const traeColecion = await getDocs(collection(db, "libros"));
    const dataFireStore = traeColecion.docs.map((libro) => ({
      id: libro.id,
      ...libro.data(),
    }));
    setLibro(dataFireStore);
  };
// Actualiza los libros "U"
  const actualizarLibros = async (id) => {
    console.log("actualizada");
    const coleccion = doc(db, "libros", id);
    await updateDoc(coleccion, form);
    await obtenerLibros();
  };
  //Elimina el libro por id "D"
  const eliminarLibro = async (id) => {
    // console.log(id);
    const coleccion = doc(db, "libros", id);
    await deleteDoc(coleccion);
    await obtenerLibros();
  };

  return (
    <>
      <header>
        <h1>Entrada de Libros </h1>
      </header>
      <main>
        <article>
          <form>
            <div>
              <div className="mb-3">
                <label htmlFor="autor" className="form-label">
                  Autor
                </label>
                <input
                  id="autor"
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setForm({ ...form, autor: e.target.value });
                  }}
                  value={form.autor}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="titulo" className="form-label">
                  Titulo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="titulo"
                  onChange={(e) => {
                    setForm({ ...form, titulo: e.target.value });
                  }}
                  value={form.titulo}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editorial" className="form-label">
                  Editorial
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editorial"
                  onChange={(e) => {
                    setForm({ ...form, editorial: e.target.value });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="año" className="form-label">
                  Año de publicacion
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="año"
                  onChange={(e) => setForm({ ...form, año: e.target.value })}
                />
              </div>
            </div>
          </form>
        </article>
      </main>
      <section>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          {/* <button
            type="button"
            className="btn btn-info"
            onClick={obtenerLibros}
          >
            obtener libros
          </button> */}
          <button
            type="button"
            className="btn btn-success"
            onClick={crearLibro}
          >
            Crear libro
          </button>
        </div>
      </section>
      <hr />
      <section>
        <table className="table">
          <thead>
            <tr className="px-4 text-center">
              <th scope="col">ID</th>
              <th scope="col">Autor</th>
              <th scope="col">Titulo</th>
              <th scope="col">Editorial</th>
              <th scope="col">Año</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {libro.map((propObjeto) => {
              return (
                <tr key={propObjeto.id} className="px-4 text-center">
                  <td>{propObjeto.id}</td>
                  <td>{propObjeto.autor}</td>
                  <td>{propObjeto.titulo}</td>
                  <td>{propObjeto.editorial}</td>
                  <td>{propObjeto.año}</td>
                  <td>
                    <div>
                      <button
                        type="button"
                        className="mx-1 btn btn-warning"
                        onClick={() => actualizarLibros(propObjeto.id)}
                      >
                        Actualizar
                      </button>

                      <button
                        type="button"
                        className="mx-1 btn btn-danger"
                        onClick={() => eliminarLibro(propObjeto.id)}
                      >
                        Eliminar
                      </button>
                      <button type="button" className="mx-1 btn btn-info">
                        Ver mas..
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default LibrosPage;
