import React from "react";

const LibrosPage = () => {
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
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Autor
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Titulo
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Editorial
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Año de publicacion
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
          </form>
        </article>
      </main>
      <hr />
      <section>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Autor</th>
              <th scope="col">Titulo</th>
              <th scope="col">Editorial</th>
              <th scope="col">Año</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Stephen King</td>
              <td>It</td>
              <td>De Bolsillo</td>
              <td>2016</td>
              <td>
              Botones
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default LibrosPage;
