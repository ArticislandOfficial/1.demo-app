import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegistrarUsuario = () => {
const crearUsuario = async () => {
  try {
    const auth = getAuth();
    const resp = await createUserWithEmailAndPassword(
      auth,
      "cesar@correo.com",
      "jesus123"
    );

    console.log(resp);
  } catch (error) {
    console.log(error.message);
  }
};



  return (
    <>
      <header>
        <h1>Registrar usuario</h1>
      </header>
      <main>
        <article>
          <button
            type="button"
            className="btn btn-success"
            onClick={crearUsuario}
          >
            Registrar
          </button>
        </article>
      </main>
    </>
  );
}
//  onClick = { crearUsuario };
export default RegistrarUsuario