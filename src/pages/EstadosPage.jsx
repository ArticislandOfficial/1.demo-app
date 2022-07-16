import React, { useState } from "react";

const EstadosPage = () => {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("Daniel");

  const aumentarContador = () => {
    // contador = contador + 1; Esto no se debe hacer nunca con las variables de estado
    setContador(contador + 1);
  };

  const cambiarNombre = () => {
    //nombre = "Martin" Esto no se debe hacer nunca con las variables de estado
    setNombre("Martin");
  };

  return (
    <>
      <header>
        <h1>Pagina de los estados</h1>
      </header>
      <main>
        <article>
          <p>Contador: {contador}</p>
          <p>Nombre: {nombre}</p>
          <button type="button" onClick={cambiarNombre}>
            Cambiar nombre
          </button>
          <button type="button" onClick={aumentarContador}>
            Aumentar contador
          </button>
        </article>
      </main>
    </>
  );
};

export default EstadosPage;
