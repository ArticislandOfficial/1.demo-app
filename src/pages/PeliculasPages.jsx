import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const initialForm = {
  nombre: "",
  descripcion: "",
  precio: "",
};

const PeliculasPage = () => {
  const [form, setForm] = useState(initialForm);
  const [movies, setMovies] = useState([]);

  const crearPelicula = async () => {
    const coleccion = collection(db, "fir-app-4b550");
    await addDoc(coleccion, form);
    await obtenerPeliculas();
  };

  const eliminarPelicula = async (id) => {
    const coleccion = doc(db, "fir-app-4b550", id);
    await deleteDoc(coleccion);

    await obtenerPeliculas();
  };
  const verMasPelicualas = async () => {
    console.log("ver mas peliculas");
  };
  const actualizarPelicula = async (id) => {
    const coleccion = doc(db, "fir-app-4b550", id);
    await updateDoc(coleccion, form);
    await obtenerPeliculas();
  };

  const obtenerPeliculas = async () => {
    const resp = await getDocs(collection(db, "fir-app-4b550"));
    const peliculas = resp.docs.map((pelicula) => ({
      id: pelicula.id,
      ...pelicula.data(),
    }));
    console.log(peliculas);
    setMovies(peliculas);
  };

  return (
    <>
      <header>
        <h1>Pagina de peliculas</h1>
      </header>
      <main>
        <article>
          <form>
            <div className="mb-3">
              <label htmlFor="nombre">Nombre</label>
              <input
                id="nombre"
                type="text"
                placeholder="Nombre"
                autoComplete="off"
                className="form-control"
                value={form.nombre}
                onChange={(e) => {
                  setForm({ ...form, nombre: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion">Descripcion</label>
              <input
                id="descripcion"
                type="textarea"
                placeholder="Comentarios"
                autoComplete="off"
                className="form-control"
                value={form.descripcion}
                onChange={(e) => {
                  setForm({ ...form, descripcion: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="precio">Precio</label>
              <input
                id="precio"
                type="text"
                placeholder="Precio"
                autoComplete="off"
                className="form-control"
                value={form.precio}
                onChange={(e) => {
                  setForm({ ...form, precio: e.target.value });
                }}
              />
            </div>
          </form>
        </article>
      </main>
      <section>
        <article>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-info"
              onClick={obtenerPeliculas}
            >
              Obtener peliculas
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={crearPelicula}
            >
              Guardar pelicula
            </button>
          </div>
        </article>
      </section>
      <section>
        <article>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Precio</th>
                <th scope="col">Informacion</th>
                <th scope="col">Actualizar</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((obj) => {
                return (
                  <tr key={obj.id}>
                    <td>{obj.id}</td>
                    <td>{obj.nombre}</td>
                    <td>{obj.descripcion}</td>
                    <td>{obj.precio}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => verMasPelicualas()}
                      >
                        <NavLink to={`/pelicula/${obj.id}`}>Ver mas ..</NavLink>
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => actualizarPelicula(obj.id)}
                      >
                        Actualizar
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => eliminarPelicula(obj.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      </section>
    </>
  );
};

export default PeliculasPage;
