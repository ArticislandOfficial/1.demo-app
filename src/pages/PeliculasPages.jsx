import React from "react";

const PeliculasPages = () => {
  return (
    <>
      <header>
        <h1>Pagina de Peliculas</h1>
      </header>
      <main>
        <form action="">
          <div className="mb-3">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              placeholder="Nombre"
              autoComplete="off"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion">Descripcion</label>
            <input
              id="descripcion"
              type="text"
              placeholder="Comentarios"
              autoComplete="off"
              className="form-control "
            />
          </div>
          <div className="mb-3">
            <label htmlFor="precio">Precio</label>
            <input
              id="precio"
              type="text"
              placeholder="Precio"
              autoComplete="off"
              className="form-control "
            />
          </div>
        </form>
      </main>
      <section>
        <article>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-info">
             Obtener pelicula
            </button>
            <button type="button" className="btn btn-success">
              Guardar Pelicula
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default PeliculasPages;
