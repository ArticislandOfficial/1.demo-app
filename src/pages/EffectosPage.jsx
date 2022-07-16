import React, { useEffect, useState } from "react";

const EffectosPage = () => {
  const [nombre, setNombre] = useState("");
  const [contador, setContador] = useState(0);

  const cambiarNombreFuncion = () => {
    setNombre("Jesus");
  };

  const actualizaContador = () => {
    setContador(contador + 1);
  };

  // Arreglo de dependencias vacio: ejecuta cuando abre la pagina (se crea el componente)
  useEffect(() => {
    console.log("Se ejecuta cuando se abre la pagina");
    return () => {
      console.log("Se cerro la pagina");
    };
  }, []);

  // Se ejecuta cuando se detecta un cambio en cualquier elemento del arreglo de dependencias
  useEffect(() => {
    console.log("Se detecto el cambio en la variable nombre");
  }, [nombre]);

  // Se ejecuta cuando se detecta cualquier cambio
  useEffect(() => {
    console.log("Se detecto cualquier cambio");
  });

  return (
    <>
      <header>
        <h1>Pagina de efectos</h1>
        <button className="btn btn-success" onClick={cambiarNombreFuncion}>
          Cambiar nombre
        </button>
        <button className="btn btn-info" onClick={actualizaContador}>
          Actualizar contador
        </button>
        <h2>{contador}</h2>
      </header>
    </>
  );
};

export default EffectosPage;
