import React, { useState } from "react";
import {db} from '../firebase/firebase';
import{ collection,addDoc } from 'firebase/firestore'

const incioFormulario = {
  autor: "",
  titulo: "",
  editorial: "",
  año: "",
};

const LibrosPage = () => {
  const [form, setForm] = useState(incioFormulario);
  const crearLibro = async () => {
    const coleccion =  collection(db,'libros')
    await addDoc(coleccion, form);
    console.log(form);
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
                <input type="number" className="form-control" id="año"
                onChange={(e)=>setForm({...form,año: e.target.value})}
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
          <button type="button" className="btn btn-info">
            Middle
          </button>
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
            <tr className="px-4 text-center">
              <th scope="row">1</th>
              <td>Stephen King</td>
              <td>It</td>
              <td>De Bolsillo</td>
              <td>2016</td>
              <td className="">
                <div>
                  <button type="button" className="mx-1 btn btn-success">
                    Actualizar
                  </button>
                  <button type="button" className="mx-1 btn btn-danger">
                    Eliminar
                  </button>
                  <button type="button" className="mx-1 btn btn-info">
                    Ver mas..
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default LibrosPage;
